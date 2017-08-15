// 3 - Handling Multiple Requests

// Website - Social Network
// Querying A Database
// Whenever user places and oder here's what's happened. It prints out 'placeAnOrder()' function and then hops down
// it pretty much starts requesting data from the database. Now this process takes five seconds. So if that's still
// going on the first block of code ('placeAnOrder(1)') didn't get done yet then why are we able to hop down to 2, 3,
// 4, 5, 6, 7. Aren't we still waiting for 5 seconds for the database to be dealt with 

function placeAnOrder(orderNumber){
	console.log("Customer order: ", orderNumber);

	cookAndDeliverFood(function(){
		console.log("Delivered food order: ", orderNumber);
	});
}

// Simulate a 5 second operation
function cookAndDeliverFood(callback){
	setTimeout(callback, 5000);
}

// Simulate users web requests
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);
placeAnOrder(7);