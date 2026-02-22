const events = [
    {
        title: "Tech Fest 2026",
        date: "2026-03-12",
        venue: "Main Auditorium",
        image: "assets/images/1.jpeg",
        category: "tech"
    },
    {
        title: "Cultural Night",
        date: "2026-03-20",
        venue: "Open Stage",
        image: "assets/images/2.jpeg",
        category: "cultural"
    },
    {
        title: "Sports Meet",
        date: "2026-03-01",
        venue: "College Ground",
        image: "assets/images/3.jpeg",
        category: "sports"
    }
];

// Get containers
const eventsContainer = document.getElementById("eventsContainer");
const pastEventsContainer = document.getElementById("pastEventsContainer");

const today = new Date();       //this will take the current date

// Loop through events and display dynamically
events.forEach(event => {           //this is same as for(let i=0;i<events.lenght;i++)
    const eventDate = new Date(event.date); //event.date is string,Date() convert it into JS date object

    const cardHTML = `
        <div class="col-md-4">
            <div class="card shadow-sm h-100"> 
                <img src="${event.image}" class="card-img-top" alt="Event">
                <div class="card-body">
                    <h5 class="card-title fw-bold">${event.title}</h5>
                    <p class="card-text text-muted">Date: ${event.date}</p>
                    <p class="card-text text-muted">Venue: ${event.venue}</p>
                    <a href="#" class="btn btn-outline-danger w-100">Register</a>
                </div>
            </div>
        </div>
    `; //this full string is just for the if condiiton written below, and will make change in html(using innerhtml) 
    //above part woeking >> card : Bootstrap card component,shadow-sm : small shadow,btn btn... : full width button with red outline
    if (eventDate >= today) {
        eventsContainer.innerHTML += cardHTML; //append Upcoming events(happening in index.html)
    } else {
        pastEventsContainer.innerHTML += cardHTML; //append Past events to history(happening in index.html)
    }
});



