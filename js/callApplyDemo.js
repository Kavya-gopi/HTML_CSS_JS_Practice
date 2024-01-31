function displayOrderDetails(gst,discount){
    let gstPrice=this.totalPrice*(gst/100);
    let discountPrice=this.totalPrice*(discount/100);
    this.totalPrice+=gstPrice;
    this.totalPrice-=discountPrice;
    console.log("Gst Amount ",gstPrice);
    console.log("discountAmount:",discountPrice);
    console.log(`Order Id: ${this.orderid} TotalPrice: ${this.totalPrice} PurchaseDate: ${this.purchaseDate}`);
}

let order1={
    orderid:1001,
    totalPrice:10000,
    purchaseDate:new Date()//todays date
}

let order2={
    orderid:2,
    totalPrice:200,
    purchaseDate:new Date()
}

displayOrderDetails.call(order1,12,10);

displayOrderDetails.apply(order2,[30,60]);


