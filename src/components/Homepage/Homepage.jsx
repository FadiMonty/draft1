import React, { useRef, useState } from "react";
import "./Homepage.scss";

function Homepage() {
  const [generated, setGenerated] = useState(false);
  const [scenario, setScenario] = useState("Reminder");

  const [text, setText] = useState(<></>);

  const inp = useRef();

  const submit = (e) => {
    e.preventDefault();
    setGenerated(true);
    switch (scenario) {
      case "Reminder":
        setText(
          <>
            Dear Mosab,
            <br />
            <br />I hope this email finds you well.
            <br />
            <br />
            This is a kind reminder for the required information we requested,
            and if your team needs any help with the integration.
            <br />
            <br />
            Please let us know if you have any questions.
            <br />
            <br />
            Best regards,
          </>
        );
        break;
      case "Custom":
        setText(
          <>
            Dear Mohammad,
            <br />
            <br />
            I hope this email finds you well.
            <br />
            <br />
            I wanted to provide you with access to our documentation, which you
            can find at the following link: <br />
            <a href="https://docs.montypay.com/">
              https://docs.montypay.com/
            </a>{" "}
            . <br />
            Hosted Checkout: For information on this integration method, please
            refer to the checkout integration section under Authentication
            Request {"->"} Request Parameters. You can access the relevant
            documentation
            <br />
            <a href="https://docs.montypay.com/checkout_integration">
              https://docs.montypay.com/checkout_integration
            </a>
            .
            <br />
            API URL:{" "}
            <a href="https://checkout.montypay.com/api/v1/session">
              https://checkout.montypay.com/api/v1/session
            </a>
            <br />
            Furthermore, I've included the test merchant key and password below
            for your convenience:
            <br />
            Merchant key: <strong>777de46a-0ec6-11ef-96d3-a605c35e5d64</strong>
            <br />
            Merchant password: <strong>818162584a7b6356ba4b84b21c11b97d</strong>
            <br />
            Test Card Details:
            <br />
            <li>Card Number: 2223 0000 0000 0007</li>
            <li>Expiry Date: 01 / 39</li>
            <li>CVV: 100</li>
            Regarding the callback URL, we require a callback function capable
            of accepting POST Data sent from our server to yours. This will
            allow us to check the status of the transaction. Kindly provide us
            with the callback URL once it's ready.
            <br />
            <a href="https://docs.montypay.com/checkout_integration#callback-notification">
              https://docs.montypay.com/checkout_integration#callback-notification
            </a>
            <br />
            Please don't hesitate to reach out if you have any questions or
            require further assistance. <br />
            <br />
            Best regards,
          </>
        );
        break;
      case "ShopifyH":
        setText(
          <>
            Dear Ms. Tala, <br />
            <br />
            Hope all is well with you. <br />
            <br />I am getting in reach regarding the integration of MontyPay
            payment gateway on your Shopify Website <br />
            <br />
            Please follow the below steps to integrate the “Pay by Card” payment
            option at your Shopify store corresponding to{" "}
            <a href="https://www.talasammakstudio.com">
              https://www.talasammakstudio.com
            </a>{" "}
            website <br />
            <br />
            1- Go to{" "}
            <a href="https://apps.shopify.com/hyperpay">
              https://apps.shopify.com/hyperpay
            </a>
            <br />
            2- Click on “login to install” button
            <br />
            3- You’ll be redirected to{" "}
            <a href="https://accounts.shopify.com/">
              https://accounts.shopify.com/
            </a>{" "}
            and you’ll be prompted to choose your e-mail account associated with
            your Shopify store. <br />
            4- Select your Shopify Store <br />
            5- Click on <strong>“Settings”</strong> then navigate to{" "}
            <strong>“payments”</strong>
            on the left side menu. <br />
            6- Click on <strong>“Hyperpay”</strong> in the{" "}
            <strong>“supported payment methods”</strong>
            <br />
            7- Enable the <strong>“Visa”</strong>
            and <strong>“MasterCard”</strong>
            schemes and disable all other payment options, enable the{" "}
            <strong>“Test mode”</strong> then <strong>“save”</strong>
            <br />
            8- Click on the <strong>“payments”</strong>
            on the left side menu again, and scroll down to{" "}
            <strong>“Payment method customizations”</strong>
            <br />
            9- The <strong>“Shopify app store”</strong>
            will open, select <strong>“HyperPay customization”</strong> then
            click on <strong>“Install”</strong>
            <br />
            10- Once installed click on <strong>
              “Add a Customization”
            </strong>{" "}
            button. <br />
            11- Enter a new name <strong>“Pay By Card”</strong> then click on
            <strong>“create”</strong> button on the top right.
            <br />
            12- You are ready now to test the card payment option <br />
            <br />
            <strong>
              Mobile App Credentials will be provided when testing the live
              environment.
            </strong>
            <br />
            <br />
            Feel free to reach us out if you have any questions. <br />
            <br />
            Regards,
          </>
        );
        break;
      case "ShopifyC":
        setText("ShopifyC");
        break;
      case "Testing":
        setText(
          <>
            Dear @Nancy Constantin, <br />
            <br />
            Kindly note that the test has been completed PBL Live Mode. <br />
            <br />
            Mobile app tested and functional as well. <br />
            <br />
            Please Refund the amount of 1 USD, and please proceed with the going
            live arrangements. <br />
            <br />
            Best regards,
          </>
        );
        break;
      case "WPC":
        setText(
          <>
            Dear Mohammad, <br />
            <br />
            Hope all is well with you. <br />
            <br />I am getting in reach regarding the integration of MontyPay
            payment gateway on your WooCommerce Website (
            <a href="https://testbanks.ac/">https://testbanks.ac/</a>
            ). <br />
            <br />
            Kindly provide us with wp-admin credentials to install and activate
            the plugin for you and make the required configuration and testing.
            <br />
            <br />
            Feel free to reach us out if you have any questions. <br />
            <br />
            Regards,
          </>
        );
        break;
      case "Wait":
        setText(
          <>
            Dear Mohammad,
            <br />
            <br />
            I hope this email finds you well.
            <br />
            <br />
            Please note that I have successfully tested the payment method.
            <br />
            <br />
            Kindly turn off the payment method to prevent your clients from
            making orders with test cards until we switch your account to live
            mode. We will notify you as soon as your account is switched to live
            mode.
            <br />
            <br />
            Additionally, please retain the test product, as we will need it to
            test the live mode as well. Once we proceed with the live testing,
            kindly disable the shipping fee to keep the checkout value at 1 USD.
            <br />
            <br />
            Best regards,
          </>
        );
        break;

      default:
        setText("Nothing");
        break;
    }
  };

  return (
    <div id="homepage_container">
      <h1>Template</h1>
      <form onSubmit={submit}>
        <label>
          Scenario:
          <select
            name="Scenario"
            id="scenario"
            onChange={(e) => {
              setScenario(e.target.value);
            }}
          >
            <option defaultChecked value="Reminder">
              Reminder
            </option>
            <option value="Custom">Custom</option>
            <option value="ShopifyH">Shopify HyperPay</option>
            <option value="ShopifyC">Shopify Cyber Source</option>
            <option value="Testing">Testing</option>
            <option value="WPC">WP Credentials</option>
            <option value="Wait">Waiting for Live Creds</option>
          </select>
        </label>
        <button type="submit">Generate</button>
      </form>
      <hr />
      <h2>Text:</h2>
      {generated ? (
        <div>
          <p type="text" ref={inp}>
            {text}
          </p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Homepage;
