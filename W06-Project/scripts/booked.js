window.onload = function() {
    let visitCount = localStorage.getItem('visitCount');
    let params = new URLSearchParams(location.search);
    const name = params.get('name')
    const email = params.get('email')
    const eventDate = params.get('event-date')
    let product = params.get('Select')
    const budget = params.get('budget')
    const details = params.get('details')

    const ticket = document.getElementById('ticket')
    const ticketMessage = document.getElementById('ticket-message')
    const number = document.getElementById('service-number')
    const eventInfo = document.getElementById('info')
    const products = {
        "fc-1888": "Brials",
        "fc-2050": "Wedding",
        "fs-1987": "Engagements",
        "ac-2000": "Reception",
        "jj-1969": "Other..."
    };
    let service = products[product].toLowerCase()
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    const event_info = {
        "Name": name,
        "Email": email,
        "Event Date": eventDate,
        "Event Type": products[product],
        "Budget": USDollar.format(budget),
        "Additional Details": details ? details : 'none'
    }
    
    if (visitCount === null) {
        visitCount = 1;
    } else {
        visitCount = parseInt(visitCount) + 1;
    }
    
    if (visitCount === 1) {
        document.getElementById('visit-counter').textContent = `Congrats on booking your first event! 🎉`
        localStorage.setItem('visitCount', visitCount);
    } else {
        localStorage.setItem('visitCount', visitCount);
        document.getElementById('visit-counter').textContent = `🌺 Thank you for booking your ${service} with us! This is event #${visitCount} you've booked with Lind Floral! 🌺`;
    }

    message = document.createElement('p')
    message.textContent = `Hi, ${name}, you have booked your ${service} for ${eventDate}. If this is not correct, please reach out to us at the number below:`
    ticketMessage.append(message)
    
    service_number = document.createElement('h4')
    service_number.textContent = `Customer Service Phone #: 444-444-4444`
    number.appendChild(service_number)

    for (line in event_info) {
        info = document.createElement('p')
        info.textContent = `${line}: ${event_info[line].charAt(0).toUpperCase() + event_info[line].slice(1)}`
        eventInfo.append(info)
    }

    ticket_end = document.createElement('p')
    discount_reminder = document.createElement('p')
    ticket_end.textContent = `A copy of this ticket will be sent to your email: ${email}`
    ticket.appendChild(ticket_end)
    if (visitCount % 5 != 0) {
        discount_reminder.textContent = `Remember - Every 5 events you book with us will get you 10% off your next event! 🌺`
    } else {
        discount_reminder.textContent = `Congrats! You've earned 10% off for this event! 🌺`
    }
    ticket.appendChild(discount_reminder)
}