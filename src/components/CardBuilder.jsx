import { useState } from 'react';
import Form from './Form';
import MessageInput from './MessageInput';
import TemplateSelector from './TemplateSelector';
import CardPreview from './CardPreview';
import Modal from 'react-modal';
import { toast } from 'react-toastify';

Modal.setAppElement('#root');

const CardBuilder = ({ setCards }) => {
  const [formData, setFormData] = useState({ name: '', relationship: '' });
  const [message, setMessage] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = async () => {
    const newCard = {
      name: formData.name,
      relationship: formData.relationship,
      message,
      template: selectedTemplate,
    };

    try {
      const res = await fetch('https://thanks-dad-server.onrender.com/api/cards', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCard),
      });

      const savedCard = await res.json();
      setCards((prev) => [savedCard, ...prev]);

      setFormData({ name: '', relationship: '' });
      setMessage('');
      setSelectedTemplate(null);
      toast.success('👏 Card’s out! Your job here is done, champ.');
    } catch (err) {
      console.error('Failed to submit card:', err);
      toast.error('💥 Boom... just kidding. It didn’t work. Try again');
    }
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6 mb-10">
        <Form formData={formData} setFormData={setFormData} />
        <MessageInput message={message} setMessage={setMessage} />
        <TemplateSelector selectedTemplate={selectedTemplate} setSelectedTemplate={setSelectedTemplate} />

        {selectedTemplate && (
          <>
            <h3 className="text-lg font-semibold mt-4 mb-2">Card Preview</h3>
            <CardPreview formData={formData} message={message} selectedTemplate={selectedTemplate} />
          </>
        )}

        <button
          type="button"
          className="mt-6 bg-green-400 text-black px-6 py-2 rounded-md cursor-pointer hover:bg-green-700 disabled:bg-red-300 disabled:cursor-not-allowed"
          disabled={!formData.name || !message || !selectedTemplate}
          onClick={() => setShowConfirm(true)}
        >
          Submit Card
        </button>
      </form>

      <Modal
        isOpen={showConfirm}
        onRequestClose={() => setShowConfirm(false)}
        className="bg-white rounded-lg p-6 w-[90%] max-w-md mx-auto shadow-lg"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <h2 className="text-xl font-semibold mb-4">This is it, Chief</h2>
        <p className="mb-6">Final call, hit submit or run for the hills!</p>
        <div className="flex justify-end gap-4">
          <button
            onClick={() => setShowConfirm(false)}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              handleSubmit();
              setShowConfirm(false);
            }}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer"
          >
            Confirm
          </button>
        </div>
      </Modal>
    </>
  )
}

export default CardBuilder;