import {
  Dimensions,
  Linking,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import AntDesign from "react-native-vector-icons/AntDesign";

const { width, height } = Dimensions.get("screen");

const TermsNdCondition = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={{ justifyContent: "center" }}
        >
          <Text>
            <AntDesign name="arrowleft" size={28} color="black" />
          </Text>
        </Pressable>
        <Text
          style={{ fontSize: 30, textAlign: "center", fontFamily: "Regular" }}
        >
          Terms & Condition
        </Text>
      </View>

      <ScrollView
        style={{
          marginHorizontal: width * 0.1,
          marginTop: height * 0.04,
          marginBottom: height * 0.02,
        }}
        showsVerticalScrollIndicator={true}
      >
        <Text style={{ fontSize: 18, lineHeight: 30, fontFamily: "Medium" }}>
          1. Health Liability
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          Using our Services is voluntary and at your own risk.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          We provide educational material and suggestions based on national
          guidelines and population averages, which are not tailored to
          individuals or intended as direct advice.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          The Platform does not create a physician-patient relationship, and you
          should consult a doctor before making changes if you have pre-existing
          medical conditions, are over 70, pregnant or nursing, or if making a
          lifestyle change could endanger your health. If you feel unwell,
          consult a doctor.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          Our Platform is not approved as a medical device and is not intended
          to diagnose, treat, cure, or prevent any disease or condition.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          We do not provide any warranty or representation with respect to the
          merchantability, fitness, or suitability of the Platform for treating
          any medical condition.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          Curb's Platform is not a medical device and cannot diagnose, treat,
          cure, or prevent any disease or condition. We provide no warranty or
          representation as to the suitability of the Platform for treating
          medical conditions. The Platform has not been approved or evaluated by
          the UK Medicines and Healthcare products Regulatory Agency for medical
          purposes. To reduce clinical risks, Curb uses clinical risk management
          processes, overseen by Dr. David McLaughlan (david@curb.health)
          {/* <Text style={{color: 'blue'}} onPress={()=>Linking.openURL('mailto:david@curb.health')}>(david@curb.health)</Text> */}
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Medium",
            marginTop: 13,
            marginBottom: 10,
          }}
        >
          2. Requirement for using Curb
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          To use our Platform, you must be 18 years old or older, and by using
          it, you confirm that you meet this requirement. If we receive a report
          at team@curb.health that a child is using our service, we will close
          the account and advise that the service is not accessible to children.
          Some parts of the Platform may have additional eligibility criteria,
          and we will inform you if this is the case. You are responsible for
          meeting all minimum eligibility criteria before registering, and by
          registering, you confirm that you meet them.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Medium",
            marginTop: 13,
            marginBottom: 10,
          }}
        >
          3. Registering with Curb
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          To use the Curb Platform, you must download the App and complete the
          registration process to set up an account.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          You can register on our App or on one of our registration webpages and
          provide accurate and complete contact information, including your name
          and email address.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          Registration is a one-time process.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          We may conduct identity and creditworthiness checks by consulting
          credit reference agencies, which you agree to by accepting these
          terms.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          You are solely responsible for your use of any Service, and we
          strictly prohibit abuse. We reserve the right to disable your Account
          at any time if we believe you have violated any part of these Terms.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Medium",
            marginTop: 13,
            marginBottom: 10,
          }}
        >
          4. Our services
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          Curb offers digital coaching services on our Platform to help
          individuals change harmful habits (our "Services").
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          We guarantee that our Services will meet the relevant description and
          be provided with reasonable care and skill.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          Our subscription options allow you to access the Service for the
          duration of your choice.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          Additionally, we collaborate with healthcare and employer providers
          who may cover the cost of the Service for a specified period (such as
          6 or 12 months), meaning you will not have to pay for Curb.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Medium",
            marginTop: 13,
            marginBottom: 10,
          }}
        >
          5. Subscription setup
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          For FREE users (i.e. if the service is set up by your healthcare
          provider or employer):
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          Once you have registered your account with us, you may log in to the
          app and no payment method will be requested. You will have free access
          for a specific time period, such as 6 or 12 months.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          For Paying subscribers:
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          After registering with us, you can order our Services by selecting a
          subscription period option and following the prompts on the screen.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          Your order will be confirmed when you click on the "Pay Now" or
          "Subscribe" button on the subscription page in the app. This will make
          you obligated to pay for the Services.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          We will send you an acknowledgement of your order, but it doesn't
          guarantee acceptance. We have the discretion to decline any order for
          any reason.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          If we accept your order, we will confirm it with an Order Confirmation
          email.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          Additional information for paying subscribers:
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          If this is your first subscription with Curb, you may cancel within
          the first 14 days (the "Trial Period"). After that, your subscription
          will automatically renew when the current subscription period ends
          unless you cancel before the renewal date (see Subscription
          cancellation), or you don't have a paid subscription (for example, you
          are using a gift voucher or your healthcare provider has offered you
          an account), or we are no longer offering the service, in which case
          we will inform you.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          The new subscription period will be the same as the previous
          subscription period (unless you have changed your subscription period
          prior to your renewal date).
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Medium",
            marginTop: 13,
            marginBottom: 10,
          }}
        >
          6. Payment processes
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          You may be invited to sign up to use Curb for free, through a partner
          of Curb, such as a GP/primary care clinic, a university, a charity, or
          your employer. When this is the case, the details of the free access,
          including the duration of free access (usually 3 or 6 months), will be
          stated clearly on the signup page. No payment will be taken in this
          case.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          If you have any queries about your free membership, please contact us
          anytime using jo@curb.health.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          For subscribers who use the Apple App Store or Google Play store
          subscription functions:
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          Payment for subscription orders is processed through these stores.
          Your card issuer will validate the payment transaction, and we are not
          responsible if your card issuer declines the payment for any reason.
          Your card issuer may also charge you an online handling or processing
          fee, which we are not responsible for.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          If you incur any additional charges for optional extras or usage (in
          accordance with our charging method as set out on the Platform), these
          charges will also be added to your account.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          You are responsible for all charges to your account, and if you have
          any questions about them, you should contact us.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          If you do not pay the charges you owe us on time (including if any
          correct charge to your credit or debit card is not authorized), we may
          suspend or terminate your access to any Service. We reserve the right
          to pursue any available legal remedy to collect the amount owed by
          you. However, charges will continue to be incurred until the account
          is closed.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          For Apple/Google subscribers, if there is an incorrect or changed
          price:
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          The charges for Services are listed on the Platform and include VAT.
          We may change the charges at any time, but any changes will not affect
          orders that have already been confirmed with an Order Confirmation.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          Although we make every effort to ensure that the Services listed on
          the Platform are correctly priced, errors may occur. If a Service's
          correct charge is lower than the stated charge, we will charge you the
          lower amount. If a Service's correct charge is higher than the stated
          charge, we may reject your order or contact you for instructions.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Medium",
            marginTop: 13,
            marginBottom: 10,
          }}
        >
          7. Consumer cancellation rights (for paid subscribers)
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          If you sign up for a subscription, you have the right to cancel the
          contract within 14 days of the trial period without any charges.
          However, if you don't cancel before the trial period ends, you
          authorize the company to charge you the agreed-upon price each
          subscription period until you cancel.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          To cancel the contract, you can inform the company through email,
          completing and submitting the cancellation form available on the
          platform, or canceling your subscription directly in Apple or Google
          Play subscriptions. This section does not affect your legal rights.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Medium",
            marginTop: 13,
            marginBottom: 10,
          }}
        >
          8. Subscription cancelling (for paid subscribers)
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          If you do not want your subscription to automatically renew, you must
          update your subscription renewal settings at least 1 day before the
          renewal date. If you fail to do so, charges may continue until the end
          of the following subscription period, and it is your responsibility to
          inform the company before renewal.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          Under normal circumstances, you cannot cancel your subscription before
          the end of the current subscription period, except for cases where the
          Services you subscribed to become unavailable or are materially
          reduced and not fixed within seven days, or when the company makes
          changes to the terms, services, or prices that you do not agree with.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          In any of these cases, you can inform the company that you wish to
          cancel your subscription. The company may offer you a partial refund
          of the advance charges you have already paid at its discretion.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Medium",
            marginTop: 13,
            marginBottom: 10,
          }}
        >
          9. Defective Services
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          Additionally, if any services you order are defective and do not
          comply with the requirements of the contract, you may have legal
          remedies available to you, depending on when you make the company
          aware of the problem. You should inform the company as soon as
          possible, preferably in writing, giving your name, address, and order
          reference. This section also does not affect your legal rights.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Medium",
            marginTop: 13,
            marginBottom: 10,
          }}
        >
          10. Our refunds policy
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          This section explains the company's refunds policy for paid
          subscribers. If you cancel a contract and are eligible for a partial
          or full refund, the company will process the refund as soon as
          possible, but no later than 14 days after you notify them of the
          cancellation. Note that if the company has not yet taken payment for
          the relevant subscription period, there will be nothing to refund.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          If you received any discounts when you made your purchase, any refund
          will only reflect the amount you actually paid. Refunds will be made
          using the same payment method that you used for the original purchase
          unless agreed otherwise.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Medium",
            marginTop: 13,
            marginBottom: 10,
          }}
        >
          11. Changes to the Terms, Services and prices
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          The company may make changes to the terms, services, or prices from
          time to time. If they do, they will not significantly reduce the type
          or level of service you receive for a Service you have already paid
          for unless necessary for security, legal, or regulatory reasons. They
          will also not increase the charges you are required to pay unless
          permitted under section 6 (Payments) above.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          The company will give you as much notice as reasonably possible of
          significant changes so that you may accept the changes or cancel your
          Service subscription without penalty. If you do not accept the
          changes, you can terminate the terms within 30 days after the changes
          take effect, or before the date the changes come into effect (as
          communicated by the company). If you do not cancel your subscription
          or continue to use the service for 30 days after the changes, this
          will be taken as acceptance of the changes.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          The company may need to temporarily modify or discontinue any part of
          the Platform from time to time, with or without notice, for example,
          to release new features. If you continue to use the service for 30
          days after such changes, this will be taken as acceptance of the
          changes.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Medium",
            marginTop: 13,
            marginBottom: 10,
          }}
        >
          12 - Suspension and Termination of Service
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          We reserve the right to temporarily suspend all or part of the
          Services or the Platform, with or without prior notice, to carry out
          repair or maintenance work or to update or upgrade any content,
          features, or functionality.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          We may terminate any Contract, or suspend and/or terminate any
          Services and/or your use of your account, with or without prior notice
          if:
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ● You breach any of these terms;
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ● You fail to pay any correctly billed charges when due; or
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ● You become insolvent or make a composition with your creditors or
          petition for your own bankruptcy or have a bankruptcy petition
          presented against you, or are subject to any event or proceedings
          which are equivalent or substantially similar under any applicable
          jurisdiction.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          In case of a breach of these terms, we may take any necessary action
          as deemed appropriate. Such actions may include, but are not limited
          to:
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ● Issuing a warning to you;
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ● Immediate, temporary or permanent removal of any content submitted
          by you;
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ● Immediate, temporary or permanent withdrawal of your right to use
          any Services;
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ● Legal proceedings against you for reimbursement of all recoverable
          loss and damage resulting from the breach;
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ● Disclosure of all relevant information to law enforcement
          authorities as we reasonably feel is necessary, and/or
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ● Any other action we deem appropriate.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          If your account or any Contract or Services end for any reason
          (including if you cancel or do not renew your Services subscription in
          accordance with these terms):
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ● All rights granted to you under these terms will immediately cease;
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ● You must promptly discontinue all use of the relevant Services; and
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ● You must pay us all outstanding amounts that you owe us.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          You may delete your account at any time with at least 5 days' notice,
          but you must notify us if you wish to do so (see Contacting us), and
          this will not cancel any subscription you have already paid for.
          Please note that account deletion and Apple and Google Subscriptions
          are not directly linked, and you must cancel directly with Apple or
          Google if you wish to cease subscription payments.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Medium",
            marginTop: 13,
            marginBottom: 10,
          }}
        >
          13. Our commitment to you
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          We confirm that we have the legal right to enter into these Terms and
          provide the Platform and Services as described in these Terms. We
          promise to offer the Platform and Services with reasonable care and
          skill, and in line with industry standards.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          We will not knowingly introduce any viruses or other malicious
          software into our Platform, and will use industry-recognized security
          software to detect their presence. We will also comply with all
          applicable laws in force.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          However, we cannot guarantee that the Platform will meet your specific
          requirements, operate uninterrupted, be timely or error-free, or that
          the results you obtain from the Services will be accurate or reliable.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          If you breach any of these Terms, your rights under them will be
          immediately terminated. We may also disable your Account if we
          determine that you have not complied with these Terms or if any
          information you provided during registration is false.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Medium",
            marginTop: 13,
            marginBottom: 10,
          }}
        >
          14. Your commitment to us
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          You are responsible for ensuring that your equipment, such as
          computers, laptops, tablets, or other mobile devices, meets the
          necessary technical specifications to access and use our Platform. Our
          Platform is designed to work best with iOS 10.0 or Android 5 and
          above. You are responsible for your Account and all activities that
          occur under your Account.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          You agree that you will:
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ✔ Only use the Platform for non-commercial use and only in accordance
          with these Terms.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ✔ Be responsible for the accuracy of the information you provide to us
          and keep it up to date.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ✔ Keep your log-in information confidential and not share it with
          anyone else.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ✔ Only use our Platform and anything available from Curb for lawful
          purposes (complying with all applicable laws), in a responsible
          manner, and not in a way that might damage our name or reputation.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ✔ Prevent any unauthorised access to, or use of, the Platform or any
          related documentation (for example, someone else using your Account).
          If any unauthorised access or use (or other security breach) does
          occur, you will inform Curb as soon as possible.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ✔ Retrieve and display content from the Platform on a computer or
          smartphone screen, print and copy individual pages, and subject to the
          next section, store such pages in electronic form. Additional terms
          may apply to certain features, parts, or content of the Platform and,
          where they apply, will be displayed on-screen or accessible via a
          link.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          Except to the extent specifically set out in these Terms, you agree
          that you will not:
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ❌ Access or attempt to access any Services which you have not
          purchased or subscribed to, or otherwise circumvent security or
          interfere with the proper working of Curb, our Platform or the hosting
          servers we use.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ❌ Modify another website or application to falsely imply that it is
          associated with us.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ❌ Impersonate any person or entity, or otherwise misrepresent your
          relationship with any person or entity (including in any User
          Content).
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ❌ Remove or change any content of the Platform, Services or any
          material provided or made available by or on behalf of Curb to you.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ❌ Create links to the Platform from any other website without our
          prior written consent, although you may link from a website that you
          operate so long as:
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          — The link is not misleading or deceptive and fairly indicates its
          destination.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          — You do not imply that we endorse you, your website, or any products
          or services you offer.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          — You link to (and do not frame or replicate) the home page of the
          Platform.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          — The linked website does not contain any content that is unlawful,
          threatening, abusive, defamatory, pornographic, obscene, vulgar,
          indecent, offensive, or which infringes on the intellectual property
          rights or other rights of any third party.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ❌ 'Scrape' content or store Curb content on a server or other storage
          device connected to a network, or create an electronic database by
          systematically downloading and storing all of the content of Curb or
          our Platform.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ❌ Hack, adapt, create copies, create derivative works, reverse
          engineer, decompile, disassemble or modify Curb or our Platform in
          whole or in part, except as permitted by law.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ❌ Interfere with or disrupt the provision of any Service or use any
          Service in a way that interferes with anyone else's use of any
          Service.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ❌ Breach the rights of any person (including, but not limited to
          rights of privacy and intellectual property rights).
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ❌ License, sell, lease, transfer, assign, distribute, display,
          disclose, or otherwise exploit, or otherwise make the Platform and/or
          any associated documentation available to any third party.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ❌ Further any criminal or fraudulent activity.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ❌ Breach any other acceptable use guidelines that we may issue from
          time to time.ß
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          User Content
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          As a user, you may have the ability to upload and communicate content
          to other users or publicly on our platform, which we refer to as User
          Areas. We do not actively moderate or control the content submitted to
          these User Areas, and any opinions expressed within User Content
          belong solely to the author and not to us.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          We reserve the right to delete, edit, or modify any User Content at
          our sole discretion and without prior notice to you. It is your
          responsibility to ensure that any User Content you submit is relevant
          and on-topic for the User Area and complies with our rules and
          regulations.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          You must not submit any Prohibited Content, which includes content
          that infringes on the rights of others, is defamatory, obscene,
          discriminatory, false, misleading, or violates any applicable laws or
          regulations. You must also refrain from submitting unsolicited
          advertising, marketing, promotional material, or any form of spam, as
          well as any virus or other destructive code.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          If you have any concerns about User Content, please contact us. By
          submitting User Content, you agree to allow us to use and reproduce it
          to improve our services. You also grant us and our affiliates a
          perpetual, irrevocable, worldwide, non-exclusive, royalty-free, and
          fully sub-licensable right and license to use, reproduce, modify,
          adapt, publish, translate, create derivative works, distribute,
          perform, and display the User Content in any form, media, or
          technology. Additionally, you waive any moral rights you may have in
          the User Content.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          If we wish to use User Content in a way that identifies you, we will
          ask for your permission first.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Medium",
            marginTop: 13,
            marginBottom: 10,
          }}
        >
          15. External Links
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          Occasionally, we may provide links to external websites, including
          those of our affiliate partners, which may lead to third-party
          e-commerce sites, offers, and promotions.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          These links are provided to offer you access to information, products,
          or services that may be of interest or use to you.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          However, we cannot be held responsible for the content of these
          external sites or any products or services provided by them.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          We cannot guarantee that these external links will be available
          continuously. These links do not imply any endorsement or association
          with the operators or promoters of the external sites.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          We may also maintain profiles or groups on social media platforms,
          which are subject to the terms and privacy policies of those
          platforms. Please refer to these external sites for additional
          information.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Medium",
            marginTop: 13,
            marginBottom: 10,
          }}
        >
          16. Ownership of Intellectual Property
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          All intellectual property rights pertaining to any content on the
          Platform, including text, graphics, software, photographs, images,
          videos, sound, trademarks, and logos, belong to us or our licensors.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          Other than what is expressly stated in these Terms, you do not acquire
          any ownership rights in any intellectual property owned by us or our
          licensors by downloading content from the Platform.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          You are not permitted to print, copy, store, or reproduce any pages
          from the Platform (in part or in full) without our express prior
          permission.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          If you print, copy, store, or otherwise reproduce pages from the
          Platform (only as permitted by us and in accordance with these Terms),
          you must ensure that any copyright, trademark, or other intellectual
          property right notices contained in the original content are also
          reproduced.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Medium",
            marginTop: 13,
            marginBottom: 10,
          }}
        >
          17. Our liability
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          We will be liable to you for certain matters as set out in these
          Terms. These include death or personal injury caused by our
          negligence, fraudulent misrepresentation, breach of the Consumer
          Rights Act 2015 or the Consumer Protection Act 1987, or any other
          liability that cannot be limited or excluded by law.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          However, if you are a consumer (not a business customer), we will not
          be liable for any business losses. If you are a business customer, we
          will not be liable for any indirect or consequential losses, or for
          any loss of profit, revenue, contracts, data, goodwill, or other
          similar losses. In any case, our liability for any losses you suffer
          in connection with a Contract will not exceed the purchase price of
          the relevant Services, and will be limited to losses that were
          reasonably foreseeable.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          We will not be liable for any failure to perform or delay in
          performance of our obligations under any Contract if such failure or
          delay is caused by events beyond our reasonable control.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          Except as expressly provided in these Terms, we make no representation
          or warranty as to the accuracy, completeness, currency, correctness,
          reliability, integrity, quality, fitness for purpose, or originality
          of any content on the Platform or Services. To the fullest extent
          permitted by law, all implied warranties, conditions, or other terms
          of any kind are hereby excluded, and we accept no liability for any
          loss or damage of any kind incurred as a result of you or anyone else
          using the Platform or Services or relying on any of its content.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Medium",
            marginTop: 13,
            marginBottom: 10,
          }}
        >
          18. Other legal points
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ● You may not transfer or assign any of your rights or obligations
          under any Contract without our prior written consent.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ● All notices that you send to us must be in writing and sent to the
          address provided at the end of these Terms. We may send notices to you
          either by email or postal mail, using the email or postal address that
          you provided when placing an order.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ● If we fail to enforce any of our rights under these Terms, that does
          not constitute a waiver of those rights.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ● If any provision of these Terms is found to be unenforceable, that
          provision will be deemed severed from these Terms and the remaining
          provisions will remain in effect.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ● These Terms may not be amended except with our express written
          consent.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ● These Terms, together with any documents referred to in them,
          constitute the entire agreement between you and us regarding your
          Subscription. By law, we are required to inform you that contracts for
          Subscriptions can only be concluded in English, and there are no
          public filing requirements.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ● These Terms are governed by English law, but if you are a consumer
          (not a business user) residing in an EU country other than England
          (including Scotland or Northern Ireland), you may have additional
          mandatory laws that apply to you, in addition to or instead of certain
          provisions of English law.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ● Any dispute between you and us relating to these Terms or your
          Subscription will be resolved exclusively by the English courts,
          unless you are a consumer residing in an EU country other than England
          (including Scotland or Northern Ireland), in which case you may choose
          to bring legal proceedings in your own country or in England.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ● If you are in the EU, you can use the European Online Dispute
          Resolution platform (http://ec.europa.eu/consumers/odr/) to seek
          alternative dispute resolution.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ● Failure to comply with these Terms may result in the following
          risks:
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          Accessibility issues: The Curb Platform strives to be compliant with
          WCAG 2.0 Level AA accessibility guidelines and ISO 9241, and welcomes
          feedback from users about how to improve accessibility. Please send
          any feedback or questions to team@curb.health. Technical issues: If
          you encounter a bug or technical issue, please report it to the Curb
          team at team@curb.health. We aim to respond to bug reports within 48
          hours on weekdays.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          Downtime: If the service experiences downtime due to technical issues,
          we aim to have the service back up and running within 24 hours, and we
          achieve this over 90% of the time.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Medium",
            marginTop: 13,
            marginBottom: 10,
          }}
        >
          19. Updates to the Terms
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          We reserve the right to change these Terms from time to time by
          changing them on the Platform. These Terms were last updated on 26
          December 2023.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Medium",
            marginTop: 13,
            marginBottom: 10,
          }}
        >
          20. How can you contact Curb?
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          If you have any questions about the Terms, our Platform or our
          Service, please contact us at team@curb.health.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TermsNdCondition;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    paddingVertical: 15,
  },
  header: {
    padding: 15,
  },
});
