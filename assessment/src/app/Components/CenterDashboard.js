 const CenterDashboard = () => {
    const cards = [
      { logo: '/logo1.png', title: '', subtitle: '' },
      { logo: '/logo2.png', title: '', subtitle: '' },
      { logo: '/logo3.png', title: '', subtitle: '' },
    ];
  
    return (
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
        <div className="flex flex-col space-y-6">
          {cards.map((card, idx) => (
            <div key={idx} className="flex flex-col items-center p-6 bg-gray-100 shadow-md rounded-lg">
              <img src={card.logo} alt={card.title} className="h-12 w-12 mb-4" />
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-sm text-gray-500">{card.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  export default CenterDashboard;
  