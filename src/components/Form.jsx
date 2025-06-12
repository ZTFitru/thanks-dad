const Form = ({ formData, setFormData }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium text-gray-700">Your Name</label>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full px-4 py-2 border rounded-md focus:outline-none bg-white"
        placeholder="e.g. Stitch"
      />
      <label className="block mt-4 mb-2 text-sm font-medium text-gray-700">Your Relationship to Dad</label>
      <input
        type="text"
        value={formData.relationship}
        onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
        className="w-full px-4 py-2 border rounded-md focus:outline-none bg-white"
        placeholder="e.g. Son, Daughter, Experiment"
      />
    </div>
  )
}

export default Form;