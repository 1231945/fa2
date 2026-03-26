
// function to calculate subtotal using service and sessions
function calculateSubtotal(service, sessions) {
    switch(service) {
        case 'Dental Check-up (PHP 850)':
            return 850 * sessions;
        case 'Eye Check-up (PHP 900)':
            return 900 * sessions;
        case 'Physical Exam (PHP 800)':
            return 800 * sessions;
        default:
            return 0;
    }
}

// function to calculate discount when applicable
function calculateDiscount(subtotal, customer) {
    if (customer === "pwd/senior") {
        return subtotal * 0.15;
    } else {
        return 0;
    }
}

function printSummary() {
    // get values from form
    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    const service = document.getElementById('service').value;
    const sessions = parseInt(document.getElementById('sessions').value);
    const customer = document.getElementById('customer').value;

    // calculate subtotal and discount
    const subtotal = calculateSubtotal(service, sessions);
    const discount = calculateDiscount(subtotal, customer);
 
    
    // print on html
    document.getElementById('nameO').innerText = "Name: " + name;
    document.getElementById('idO').innerText = "Grade and Section " + id;
    document.getElementById('Order').innerText = "Order: " + service;
    document.getElementById('Quantity').innerText = "Quantity: " + sessions;
    document.getElementById('subtotal').innerText = "Subtotal: PHP" + subtotal;
    document.getElementById('discount').innerText = "Discount: PHP" + discount;
    document.getElementById('total').innerText = "Total: PHP" + (subtotal - discount);
    document.getElementById('msg').innerText = "Thank you for booking with us!";
}

