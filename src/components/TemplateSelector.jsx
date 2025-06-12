const templates = [
  { id: 1, name: 'Cool Mint', bgColor: 'bg-green-200', textColor: 'text-green-900' },
  { id: 2, name: 'Warm Sunset', bgColor: 'bg-yellow-200', textColor: 'text-yellow-900' },
  { id: 3, name: 'Fire Red', bgColor: 'bg-red-200', textColor: 'text-red-900' },
]

const TemplateSelector = ({ selectedTemplate, setSelectedTemplate }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium text-gray-700">Select a Template</label>
      <div className="flex gap-4">
        {templates.map((template) => (
          <div
            key={template.id}
            onClick={() => setSelectedTemplate(template)}
            className={`cursor-pointer p-4 rounded-md shadow-md border-2 ${
              selectedTemplate?.id === template.id ? 'border-green-600' : 'border-transparent'
            } ${template.bgColor} ${template.textColor} transition`}
          >
            <p className="font-semibold">{template.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TemplateSelector;