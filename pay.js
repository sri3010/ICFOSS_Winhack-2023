'use strict';

const tokenizattionSpecification = {
    type: 'PAYMENY_GATEWAY', 
    parameters: {
        gateway: 'example', 
        gatewayMerchantId: 'gatewayMerchantId'
    }
}

const cardPaymentMethod = {
    type: 'CARD',
    tokenizattionSpecification: tokenizattionSpecification,
    parameters: {
        allowedCardNetworks: ['VISA', 'MASTERCARD'],
        allowedAuthmentMethods: ['PAN_ONLY', 'CRYPTOGRAM_3D5'],
    }
}

const googlePayConfiguration = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [cardPaymentMethod]
};

let googlePayClient;

function onGooglePayLoaded(){
    const googlePayClient = new google.payments.api.PaymentsClient({
        environment: 'TEST'
    });

    googlePayClient.isReadyToPay(googlePayConfiguration)
    .then(response => {
        if (response.result) {
            createAndAddButton();
        } else {

        }
    })
    .catch(error => console.error('isReadyToPay error: ', error));
}

function createAndAddButton() {
    const googlePayButton = googlePayClient.createButton({
    onClick: onGooglePayButtonClicked
});
}

document.getElementById('buy-now').appendChild(googlePayButton);

function onGooglePayButtonClicked(){
    const paymentDataRequest = {...googlePayConfiguration};
    paymentDataRequest.merchantInfo = {
        merchantId: 'BCR2DN4TXKK33BBS',
        merchantName: 'Kerala-Tourism'
    };

paymentDataRequest.transactionInfo = {
    totalPriceStatus: 'FINAL',
    totalPrice: selectedItem.price,
    currencyCode: 'INR',
    countryCode: 'IN'
};

googlePayClient.loadPaymentData(paymentDataRequest)
    .then(paymentData => processPaymentData(paymentData))
    .catch(error => console.error('loadPaymentData error: ', error));

}

function processPaymentData(paymentData){
    fetch(ordersEndpointUrl, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: paymentData
    })
}

googlePayClient.isReadyToPay(clientConfiguration)
.then(function(response){
    if(response.result)
{

}
}).catch(function(err){

});