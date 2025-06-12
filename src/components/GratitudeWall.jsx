const GratitudeWall = ({ cards }) => {
  return (
    <div className="mt-10 px-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Wall of Gratitude</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">No messages yet. Be the first!</p>
        ) : (
          cards.map((card, index) => (
            <div key={index} className={`p-4 rounded-md shadow ${card.template.bgColor} ${card.template.textColor}`}>
              <h3 className="font-semibold mb-2">Dear Dad,</h3>
              <p>{card.message}</p>
              <p className="mt-4 text-sm font-medium">
                — {card.name} {card.relationship && `(${card.relationship})`}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default GratitudeWall;