window.onload = function() {
    let visitCount = localStorage.getItem('visitCount');
    let params = new URLSearchParams(location.search);
    const stars = params.get('stars')
    const product = params.get('Select')
    const response = document.getElementById('response')
    const ratingContainer = document.getElementById('rating')

    const products = {
          "fc-1888": "flux capacitor",
          "fc-2050": "power laces",
          "fs-1987": "time circuits",
          "ac-2000": "low voltage reactor",
          "jj-1969": "warp equalizer"
    };

    if (visitCount === null) {
      visitCount = 1;
    } else {
        visitCount = parseInt(visitCount) + 1;
    }
    
    if (visitCount === 1) {
        document.getElementById('visit-counter').textContent = "Congrats on submitting your first review! 🎉"
        localStorage.setItem('visitCount', visitCount);
    } else {
        localStorage.setItem('visitCount', visitCount);
        document.getElementById('visit-counter').textContent = 'Thank you for leaving ' + visitCount + ' reviews!';
    }

    if (parseInt(stars) < 3 ) {
        rating = document.createElement('h4')
        rating.textContent = `You rated the ${products[product]} ${stars}/5 stars.`
        ratingContainer.appendChild(rating)

        response.textContent = `We\'re sorry to hear you didn\'t like the ${products[product]}. Reach out to our customer if you need any help!`

        service_number = document.createElement('h4')
        service_number.textContent = 'Customer Service Phone #: 444-444-4444'
        response.appendChild(service_number)
    } else if (parseInt(stars) == 3 ) {
        rating = document.createElement('h4')
        rating.textContent = `You rated the ${products[product]} ${stars}/5 stars.`
        ratingContainer.appendChild(rating)

        response.textContent = `What's something we can do to improve the quality of the ${products[product]}? Reach out to our customer service!`

        service_number = document.createElement('h4')
        service_number.textContent = 'Customer Service Phone #: 444-444-4444'
        response.appendChild(service_number)
    } else {
        rating = document.createElement('h4')
        rating.textContent = `You rated the ${products[product]} ${stars}/5 stars!`
        ratingContainer.appendChild(rating)
        
        response.textContent = `Thank you for your review!`
    }
};