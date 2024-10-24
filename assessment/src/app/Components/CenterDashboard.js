const CenterDashboard = () => {
    const cards = [
      { logo: './BookLogo.png', title: 'Book Title', subtitle: 'Subheading 1', bgColor: '#4749B3' }, 
      { logo: './LiveLogo.png', title: 'Live Session', subtitle: 'Subheading 2', bgColor: '#E66DFF' }, 
      { logo: './Whatsapp.png', title: 'Whatsapp Group', subtitle: 'Subheading 3', bgColor: '#6669FE' }, 
    ];
  
    return (
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-6 text-black">Quick Links</h2>
        <div className="flex flex-col space-y-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-6 shadow-md rounded-lg"
              style={{ backgroundColor: card.bgColor }} // Apply background color dynamically
            >
              <img src={card.logo} alt={card.title} className="h-12 w-12 mb-4" />
              <h3 className="text-lg font-semibold text-white">{card.title}</h3> {/* Changed text color to white for contrast */}
              <p className="text-sm text-gray-200">{card.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CenterDashboard;
  