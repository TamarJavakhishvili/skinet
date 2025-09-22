github link of the project:  https://github.com/TamarJavakhishvili/skinet.git

to run the project you will need to have installed:
1. Docker
2. .Net SDK v8 or v9
3. NodeJS (at least version 20.11.1)
4. Angular at least version 18
5. Postman is used to test API endpoints
6. For Styles tailwindCSS is used
7. Restore the packages by running: dotnet restore - for the API, npm install - for the client (angular)
8. For the payment functionality to work, you will need to create a Stripe account and populate the keys from Stripe.
    In the API folder in a file called ‘appsettings.json’ use Stripe keys with the following code (replace with your keys here - REPLACEME):
   
   appsettings.json:
   
   {
    "Logging": {
      "LogLevel": {
        "Default": "Information",
        "Microsoft.AspNetCore": "Warning"
      }
    },
    "StripeSettings": {
      "PublishableKey": "pk_test_REPLACEME",
      "SecretKey": "sk_test_REPLACEME",
      "WhSecret": "whsec_REPLACEME"
    },
    "AllowedHosts": "*"
  }

9. To use the Stripe webhook you will also need to use the StripeCLI, and when you run this you will be given a whsec key which you will need to add to the appsettings.json.
   To get this key and instructions on how to install the Stripe CLI you can go to your Stripe dashboad ⇒ Developers ⇒ Webhooks ⇒ Add local listener.
   The whsec key will be visible in the terminal when you run Stripe.

10. Once you have the Stripe CLI you can then run this so it listens to stripe events and forward them to the .Net API:
   to login to stripe use:
    stripe login

    to listen to stripe events and forward them to the API:
    stripe listen --forward-to https://localhost:5001/api/payments/webhook -e payment_intent.succeeded

 11.  The app uses both Sql Server and Redis. Run all Services in docker-compose.yml
          
 12.  You can run both the .Net app and the client app using following commands in terminal:
     # terminal 1:
    cd API
    dotnet run

    # terminal 2:
    cd client
    ng serve
13. Then browse to https://localhost:4200
14. You can use the Stripe test cards: eg. Visa: 4242424242424242, MC: 5555555555554444, or other test cards available on Stripe website.
  
