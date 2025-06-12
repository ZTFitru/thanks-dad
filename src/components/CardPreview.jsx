const CardPreview = ({ formData, message, selectedTemplate }) => {
  return (
    <div className={`p-6 rounded-md shadow-xl text-center w-full md:w-1/2 mx-auto ${selectedTemplate?.bgColor} ${selectedTemplate?.textColor}`}>
      <h2 className="text-2xl font-bold mb-2">Dear Dad,</h2>
      <p className="mb-4">{message || 'Your message will appear here...'}</p>
      <p className="mt-6 font-medium">
        {formData.name || 'Anonymous'} {formData.relationship && `(${formData.relationship})`}
      </p>
    </div>
  )
}

export default CardPreview;