const CenterDashboard = () => {
    const cards = [
      { logo: './BookLogo.png', title: 'Canvas LMS', subtitle: 'Click here to access your LMS portal for assignments, class recordings and notes.', bgColor: '#4749B3' }, 
      { logo: './LiveLogo.png', title: 'Join Live Class', subtitle: 'Class 7 Math is starting in 1 hour, 35 minutes.', bgColor: '#E66DFF' }, 
      { logo: './Whatsapp.png', title: 'Contact Teacher', subtitle: 'Click here to contact your teacher for any doubts or concerns.', bgColor: '#6669FE' }, 
    ];
  
    return (
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold mb-6 text-black text-left">Quick Links</h2>
        <div className="flex flex-col space-y-4">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-6 shadow-md rounded-xl"
              style={{ backgroundColor: card.bgColor}} // Apply background color dynamically
            >
              <img src={card.logo} alt={card.title} className="h-6 w-6 mb-4" />
              <h3 className="text-lg font-semibold text-white">{card.title}</h3> {/* Changed text color to white for contrast */}
              <p className="text-sm text-gray-200">{card.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CenterDashboard;
  