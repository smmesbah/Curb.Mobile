import {
  Dimensions,
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
import {
  privacyPolicy1,
  disclosurePoints,
  dataUsagePurposes,
  dataProcessingEntities,
  retentionInfo,
  disclosureInfo,
  dataUsagePurposes2,
  userRights,
  informationCommissionerOfficePoints,
  functionalityCookies,
  cookiesInformationArray,
  socialNetworkingCookies,
  socialSharingCookies,
  disablingCookiesInfo,
  microsoft,
  google,
  safari,
  mozilla,
  opera,
} from "./data/data";

const { width, height } = Dimensions.get("screen");

const PrivacyPolicy = () => {
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
          Privacy Policy
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
        {/* <Text style={{ fontSize: 18, lineHeight: 30, fontFamily: "Medium" }}>
          1. Health Liability
        </Text> */}
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          Welcome to Curb! Curb is the trading name of “Mind Health AI ltd” We
          are called "we", "us", "our", or "Curb" in this Privacy Notice).
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          We talk about our website (curb.health) (the "Site") and our mobile
          application (the "App") (and anything we might provide in the future)
          together as Curb or as our "Platform".
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          Curb provides a digital coach to help people change habits, and our
          services are as described on the Platform (our "Services").
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          Let's start with some key points, which you'll find more detail on
          below:
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          The Curb app collects information from you, including things like your
          name, email, health behaviours, demographics and medical conditions,
          in order to tailor the health coaching and content within the service,
          to be more useful. We never share personally identifiable user
          information externally, without your explicit permission - for
          example, we may ask if you'd like to be part of a research study where
          a specific university team may be able to see the information, or in
          the future, we may ask you if you'd like to share your Curb data with
          your doctor. This would be entirely optional and we would always
          explicitly ask for your consent first.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          We do share an overall summary of average insights (otherwise known as
          aggregated data) with select parties, such as primary care clinics/GP
          practices and researchers, for the purpose of improving care and
          understanding population health challenges. It is not personally
          identifiable; therefore, your personal information would never be
          shared in this way.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          Curb is fully GDPR compliant, meaning we take privacy, data
          protection, clinical safety and usability very seriously. If you have
          any questions on our policies or would like help with something, you
          can email us using team@mindhealthai.com.
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Medium",
            marginTop: 13,
            marginBottom: 15,
          }}
        >
          Please read our Terms and Privacy Notice carefully. It will take about
          5-10 minutes if you read the whole Terms.
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
          1. What information do we collect & how do we use it?
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          This Privacy Notice will apply to you if:
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          ● you visit and browse our Site or App. {"\n"}● you contact or engage
          with us. {"\n"}● you sign up for marketing from Curb.{"\n"} ● you use
          our Services (with or without an account).{"\n"}
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          We must have a relevant legal reason, called a 'lawful basis' for each
          way that we use your personal information. We say what our legal
          reasons are in each section below, and we explain what each one means
          under 'What do each of these legal reasons mean?'.
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
          If you visit our Platform:
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          We collect: {"\n"}If you visit any of our Services, whether you're
          just browsing or you have an account, we will automatically collect
          information from you each time you use our Platforms. This includes:
          {"\n"}
          {"\n"}
          technical information{"\n"}information about your visit and {"\n"}(if
          you opt-in) location data {"\n"}What do each of this include? {"\n"}
          Technical information{"\n"}
          {"\n"}
          Technical information may include: phone number, Internet Protocol
          (IP) address, login information, browser type and version, browser
          plug-in types and versions, device IDs, social log-in ID/email
          address, time zone setting, operating system and platform, hardware
          version, device settings (e.g. language and time zone), file &
          software names and types (associated with your device and/or the
          Services), battery & signal strength, information relating to your
          mobile operator or Internet Service Provider (ISP).
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
          Information about your visit
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          Information about your visit may include the full Uniform Resource
          Locators (URL), clickstream to, through and from our Site (including
          date and time), pages and services you viewed or searched for,
          demographic information (including age and gender), page response
          times, download errors, length of visits to certain pages, page
          interaction information (such as scrolling, clicks, and mouse-overs),
          traceable campaign links (e.g. in emails, or via tracking URLs),
          methods used to browse away from the page, and any phone number used
          to call our customer service number or social media handle used to
          connect with our customer service team and our social media accounts.
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
          Location data
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          We only collect location data if you give us permission (via our
          website cookie banner, or via your app settings).{"\n"} {"\n"}Location
          data includes country location (based on your full or partial IP
          address and/or Google Analytics information) which we use to provide
          location services (if you ask or permit us to), so that we can deliver
          content, advertising or other services that are dependent on knowing
          where you are, like checking for fraudulent transactions. {"\n"}
          {"\n"}Location data may be collected in combination with device ID, so
          we can recognise your mobile browser or device when you return to the
          Service. {"\n"}
          {"\n"}Delivery of location services will involve us checking any of
          the following:o the coordinates (latitude/longitude) of your location,
          ‍ {"\n"}
          {"\n"}Your current country or region, by referencing your current IP
          address against public sources, and/or {"\n"}
          {"\n"}Your Identifier for Advertisers (IFA) or ID for Vendors (IDFV)
          code for your Apple device, or the Android ID for your Android device,
          or a similar device identifier. ‍{"\n"}
          {"\n"}You can opt-in and out of location sharing by changing your
          device settings. {"\n"}
          {"\n"}We use this to: {"\n"}● understand how individuals use our
          Platform, and how we can improve it. {"\n"}● ensure content from our
          site is presented in the most effective manner for you and for your
          computer. {"\n"}● provide you with the information, products and
          services that you request from us or we think you may be interested
          in. {"\n"}● if you visit our website and opt-in to cookies, or
          download our app and opt-in to letting us use your personal data for
          tracking, we may display Curb ads to you on other websites, or send
          you push notifications – for example, to encourage you to get started
          using Curb. You can always change what we have access to in your
          device settings. {"\n"}
          {"\n"}Our legal reason for this is: {"\n"}We do this in our legitimate
          interests, where we have considered these are not overridden by your
          rights or with your consent if required (e.g. to non-strictly
          necessary cookies). {"\n"}
          {"\n"}What do these legal reasons mean?‍{"\n"}
          See below for our Cookie Notice for more information on the use of
          cookies and device identifiers on the Services.{"\n"}
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
          If you contact or engage with us:
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          We collect: {"\n"}If you contact or engage with us, we will collect
          your contact information, and the other communications information you
          provide. {"\n"}
          {"\n"}Contact information includes basic contact information you
          provide, for example: {"\n"}
          {"\n"}● email address, {"\n"}● first and last name, {"\n"}● phone
          number(s), {"\n"}● social media handle (for example, if you engage
          with us on social media) {"\n"}● address (we may sometimes ask for
          this to send you Holly goodies, this is optional). {"\n"}
          {"\n"}Communications information includes your correspondence with us,
          for example if you get in touch with us to ask about a subscription or
          to report a problem with our Site. This includes: {"\n"}
          {"\n"}● emails, {"\n"}● texts, in-app messaging & other digital
          messaging, {"\n"}● calls, {"\n"}● letters, {"\n"}● any in-person
          conversations you have with us. {"\n"}
          {"\n"}We use this to: {"\n"}● Contact you if you have asked us to do,
          including to respond to your queries, troubleshoot problems, and help
          with any issues you may have with our Services. {"\n"}● Provide you
          with information you might request about our Services. {"\n"}● Provide
          you with technical and other service updates (for example, if we
          update our Terms of Service). {"\n"}
          {"\n"}Our legal reason for this is: {"\n"}We do this in our legitimate
          interests. {"\n"}
          {"\n"}We may also do this to take steps to enter into any contract
          with you or to fulfil our obligations under any contract with you
          (including our Terms of Service). {"\n"}
          {"\n"}Where required, we may do this with your consent.{"\n"}
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
          If you sign up for updates, offer or other marketing from Curb:
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          We collect: {"\n"}We may collect contact information (as explained
          above), like your name and email address. {"\n"}
          {"\n"}We may also collect marketing preferences, which are our records
          of what information you would or would not like to receive from us,
          and if you have opted out of any direct marketing. {"\n"}
          {"\n"}We use this to: {"\n"}● send you offers, updates, promotions,
          newsletter(s), insights and other marketing material related to Curb.{" "}
          {"\n"}● send you personalised marketing, for example about new
          features we think you may be interested in or habits you've set,
          related to Curb. {"\n"}● send you surveys, competitions, promotional
          campaigns, offers or other occasional activities. {"\n"}● ask you for
          feedback, including through surveys and other marketing research.{" "}
          {"\n"}
          {"\n"}We may send these via push notifications, emails or texts,
          depending on your preferences. {"\n"}
          {"\n"}Our legal reason for this is: {"\n"}We do this with your
          consent, where required.In certain circumstances (for example, if you
          agree to marketing when you begin a paid subscription), we may do this
          in our legitimate interests (where we have considered these are not
          overridden by your rights). {"\n"}
          {"\n"}What do these legal reasons mean? {"\n"}You can opt-out of
          further marketing at any time by selecting the "unsubscribe" link at
          the end of all our promotional email updates.{"\n"}
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
          If you use or sign up for our Services:
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          We collect: {"\n"}Account {"\n"}You must create an account to use
          Curb. {"\n"}
          {"\n"}You may have access to a limited preview with just a first name.{" "}
          {"\n"}
          {"\n"}If you sign up for an account with us, you can sign in using
          your account with Apple, Facebook or Google, or with your email.
          You'll create a password. You can disconnect this later if you change
          your mind. If you disconnect an account login, without creating an
          account using your email address, you will no longer be able to access
          your account.{"\n"}
          {"\n"}
          We'll record which subscription and payment option you choose. We
          won't see your payment information.{"\n"}
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
          Habits, goals and wellbeing
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          We'll collect your: ​ {"\n"}
          {"\n"}● city location or post code (optional, for data-driven
          comparison). {"\n"}● health & wellbeing goals (like improved sleep).{" "}
          {"\n"}● age and gender). {"\n"}● information you share about specific
          habits: {"\n"}
          {"\n"}o sleep {"\n"}o exercise {"\n"}o mental health (e.g. mindful
          breathing, evening reading completed, or information about how you
          feel). {"\n"}
          {"\n"}● information you share about all your habits: {"\n"}
          {"\n"}o habit timing (e.g. length, repetition, day of the week, time
          of day (like before breakfast or after work) and calendar information){" "}
          {"\n"}o progress (like weight or psychological markers). {"\n"}
          {"\n"}● information we create and track about your habits, for
          example: {"\n"}
          {"\n"}o your progress charts showing percentage changes, or how you've
          rated your mood {"\n"}o personalised information, where we combine
          information you give us or that we record about you so that we can
          improve our services and offer you better recommendations. {"\n"}
          {"\n"}● any requests or suggestions you submit to us. {"\n"}
          {"\n"}App integrations {"\n"}In the future, you may have the option to
          share information from other apps (like Apple Health or Google Fit)
          with Curb. We won't do this without asking you, we'll provide more
          information at the time. {"\n"}
          {"\n"}We use this to: {"\n"}● provide our Services to you, including:{" "}
          {"\n"}
          {"\n"}o Providing personalised information and recommendations (e.g.
          articles, videos, activity challenges) for you across sleep,
          nutrition, exercise and mental health. Enabling you to set goals and
          track your habits {"\n"}o Understanding user experience, so that we
          can improve future designs {"\n"}
          {"\n"}Our legal reason for this is: {"\n"}We do this to comply with
          our contract with you (e.g. our Terms of Service). We may also do this
          in our legitimate interests. GDPR enables users to opt out of user
          profiling. User profiling does not apply to the Curb service in its
          current service design.{"\n"}
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
          2. What do each of these legal reasons mean?
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          We must have a relevant legal justification, called a 'lawful basis'
          for each way in which we use your personal information. {"\n"}
          {"\n"}Lawful bases include consent, a contract with you (as a data
          subject), compliance with our legal obligations and our specified
          legitimate interests.{"\n"}
          {"\n"}
          Consent: {"\n"}We'll use your personal information to send you
          promotional or marketing content (for example, updates or newsletters)
          if you have consented (where required by law). {"\n"}
          {"\n"}We may also send direct marketing based on our legitimate
          interests (see below). {"\n"}
          {"\n"}You can opt-out of further marketing at any time by selecting
          the "unsubscribe" link at the end of all our promotional updates and
          marketing to you. {"\n"}
          {"\n"}We also rely on consent for some of the cookies we use (see our
          Cookie Notice for more detail). {"\n"}
          {"\n"}Contract: {"\n"}We use your personal information if it is
          necessary to perform a contract you have with us (for example, our
          Terms of Service), or if you have asked us to take specific steps
          before entering that contract. We may send you service updates based
          on your contract with us (for example, about your subscription
          payments). {"\n"}
          {"\n"}Legitimate interests: {"\n"}Curb collects only the minimum
          information needed to provide a useful and personalised coaching
          service. We may use your personal information if it is necessary for
          our legitimate interests or the legitimate interests of a third party,
          provided those interests are not outweighed by your rights and
          interests. Our legitimate interests include: {"\n"}
          {"\n"}Administering, improving and expanding our Platform and services
          {"\n"}
        </Text>
        {privacyPolicy1.map((item, index) => (
          <View key={index}>
            <Text
              style={{
                fontSize: 18,
                lineHeight: 30,
                fontFamily: "Regular",
                marginTop: 8,
              }}
            >
              - {item}
            </Text>
          </View>
        ))}
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          Fulfilling agreements with other organisation {"\n"}
          {"\n"}− Complying with any agreement we may have with an organisation
          you work for or provide services to. {"\n"}− Enforcing or applying our
          terms or other agreements with you or with an organisation you work
          for or provide services to.{"\n"}
          {"\n"}
          In each case, these legitimate interests are only valid if they are
          not outweighed by your rights and interests. If you would like further
          information about how we assess our legitimate interests, please
          contact us at dpo@csrb.co.uk. The Curb DPO (data protection officer)
          is CSRB limited. If there are material changes to how we collect user
          data, user consent will be re-obtained. {"\n"}
          {"\n"}Legal obligation: {"\n"}We may need to process your personal
          information to comply with our legal obligations, including under
          applicable UK law, and/or any court orders. This may include
          compliance with know-your-client and anti-money laundering rules.{" "}
          {"\n"}
          {"\n"}We also use different types of cookies on our Platform – we
          explain this in the Cookie Notice.{"\n"}
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
          3. Who do we share your information with?
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          We may share your personal information with:{"\n"}
        </Text>
        {disclosurePoints.map((item, index) => (
          <View key={index}>
            <Text
              style={{
                fontSize: 18,
                lineHeight: 30,
                fontFamily: "Regular",
                marginTop: 8,
              }}
            >
              ● {item}
            </Text>
          </View>
        ))}
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Medium",
            marginTop: 13,
            marginBottom: 10,
          }}
        >
          4. Where do we store your information?
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          Curb is based in the United Kingdom. We may transfer your personal
          information outside the UK (or, if you are in the EEA, outside of the
          EEA):
        </Text>
        {dataUsagePurposes.map((item, index) => (
          <View key={index}>
            <Text
              style={{
                fontSize: 18,
                lineHeight: 30,
                fontFamily: "Regular",
                marginTop: 8,
              }}
            >
              ● {item}
            </Text>
          </View>
        ))}

        <Text
          style={{
            fontSize: 18,
            lineHeight: 30,
            fontFamily: "Regular",
            marginTop: 8,
          }}
        >
          We will put legal protections in place to safeguard personal data
          transfers in compliance with data protection laws. {"\n"}
          {"\n"}We may transfer your personal information outside the UK / EEA,
          including to the key organisations listed below:{"\n"}
          {"\n"}
        </Text>
        {dataProcessingEntities.map((entity, index) => (
          <View key={index}>
            <Text style={styles.text_style}>{entity.name}</Text>
            <Text style={styles.text_style}>{entity.location}</Text>
            <Text style={styles.text_style}>{entity.clauses}</Text>
          </View>
        ))}
        <Text style={styles.text_style}>
          We update our partners and service providers as we grow, and will
          update this Notice regularly. For more information about how we
          currently transfer and protect data, please team@mindhealthai.com.
        </Text>
        <Text style={styles.text_style2}>
          5. How do we protect your information?
        </Text>
        <Text style={styles.text_style}>
          All information you provide to us is stored on our servers. Our
          website uses secure end-to-end encryption to protect your information.
          All connections into our platform are secured using industry standard
          security and encryption.{"\n"} {"\n"}All data we capture is stored in
          secured databases and data storage systems with strict access
          limitations. All data access requests are logged and monitored in
          accordance with any threat detection policies. {"\n"}
          {"\n"}Unfortunately, the transmission of information via the internet
          is not completely secure. We do our best to protect your personal
          information, but we cannot guarantee the security of your data
          transmitted to us, any transmission is at your own risk. Once we have
          received your information, we use strict procedures and security
          features to try to prevent unauthorised access.{"\n"}
        </Text>
        <Text style={styles.text_style2}>6. Payments</Text>
        <Text style={styles.text_style}>
          Payments made on our App and for our Services are made through the
          Apple App Store or Google Play store subscription functions. {"\n"}
          {"\n"}You will be providing credit or debit card information directly
          to Apple or Google (which will use a secure server to process payment
          details, encrypting your credit/debit card information and authorising
          payment). {"\n"}
          {"\n"}Information which you supply to Apple or Google is not within
          our control and is subject to Apple's or Google's own privacy policy
          and terms.‍{"\n"}
        </Text>
        <Text style={styles.text_style2}>7. Other websites</Text>
        <Text style={styles.text_style}>
          We may sometimes link to other websites (including other apps). The
          websites will have their own privacy information, which you should
          read before using or sharing personal information with the site.{" "}
          {"\n"}
          {"\n"}We are not responsible or liable for these websites, any content
          on them, or their policies and notices. A link does not mean we
          endorse the views of the linked website. We have no control over the
          availability of any of these websites.
        </Text>
        <Text style={styles.text_style2}>
          8. How long d we keep your information for?
        </Text>
        <Text style={styles.text_style}>
          If you freeze your account, we will retain your personal information
          while it is frozen.{"\n"}
          {"\n"} We will usually keep personal information:{"\n"}
        </Text>
        {retentionInfo.map((item, index) => (
          <View key={index}>
            <Text style={styles.text_style}>● {item}</Text>
          </View>
        ))}
        <Text style={styles.text_style}>
          We may keep your personal information for a longer period:
        </Text>
        {disclosureInfo.map((item, index) => (
          <View key={index}>
            <Text style={styles.text_style}>● {item}</Text>
          </View>
        ))}
        <Text style={styles.text_style}>
          If you have opted into receiving marketing from us but later decide to
          opt out (or object to any other use of your personal information), we
          may keep a record of your opt-out or objection so we can respect your
          preferences
        </Text>
        <Text style={styles.text_style2}>9. Anonymised data</Text>
        <Text style={styles.text_style}>
          We may anonymise your personal data to create anonymised data (like
          aggregated statistics). You cannot be identified from anonymised data,
          and it cannot be reverse engineered to re-identify individuals. This
          kind of data is no longer personal data. {"\n"}
          {"\n"}We may keep and use this anonymised data to help us provide,
          develop and improve our Platform and services, including to:{"\n"}
        </Text>
        {dataUsagePurposes2.map((item, index) => (
          <View key={index}>
            <Text style={styles.text_style}>● {item}</Text>
          </View>
        ))}
        <Text style={styles.text_style2}>
          10. What rights do you have over your personal information?
        </Text>
        <Text style={styles.text_style}>
          In certain circumstances, you have the following rights:
        </Text>
        {userRights.map((item, index) => (
          <View key={index}>
            <Text style={styles.text_style}>● {item}</Text>
          </View>
        ))}
        <Text style={styles.text_style}>
          If you would like to exercise any of these rights in relation to the
          personal information we hold about you, you can contact us at
          team@curb.health . We will respond to user data requests as quickly as
          possible, with a maximum turn around time of 2 months. If you have any
          concerns, you have the right to lodge a complaint with a data
          protection supervisory authority.
        </Text>
        {informationCommissionerOfficePoints.map((item, index) => (
          <View key={index}>
            <Text style={styles.text_style}>● {item}</Text>
          </View>
        ))}
        <Text style={styles.text_style2}>11. Updating this Privacy Notice</Text>
        <Text style={styles.text_style}>
          This Notice was last updated 26/12/2023
        </Text>
        <Text style={styles.text_style}>
          We may update this Notice from time to time, and will post any changes
          on this page.
        </Text>
        <Text style={styles.text_style}>
          If we make any substantive changes, we will notify you through email
          or website pop-ups within our Platform.
        </Text>
        <Text style={styles.text_style}>
          12. How can you contact us? We would love to hear from you. If you
          have any questions or feedback, please get in touch at
          team@curb.health .
        </Text>
        <Text style={styles.text_style2}>1. Cookie Notice</Text>
        <Text style={styles.text_style}>
          Our Sites use cookies and/or other similar technologies such as
          device-IDs, in-app codes, pixel tags and web beacons to collect and
          store certain information.
        </Text>
        <Text style={styles.text_style}>What are cookies?</Text>
        <Text style={styles.text_style}>
          These typically involve pieces of information or code that a website
          transfers to or accesses from your computer hard drive or mobile
          device to store and sometimes track information about you. Cookies and
          similar technologies enable you to be remembered when using that
          computer or device to interact with websites and online services and
          can be used to manage a range of features and content as well as
          storing searches and presenting personalised content.
        </Text>
        <Text style={styles.text_style}>How does Curb use cookies?</Text>
        <Text style={styles.text_style}>
          Our Sites use cookies and similar technologies either alone or in
          combination with each other to create a unique device ID, and to
          distinguish you from other users of our Sites. This helps us to
          provide you with a good experience when you browse our Platform, and
          allows us to improve our Sites.
        </Text>
        <Text style={styles.text_style}>
          A number of cookies and similar technologies we use last only for the
          duration of your web or app session and expire when you close your
          browser or exit our Site or App. Others are used to remember you when
          you return to one of our Sites and will last for longer.
        </Text>
        <Text style={styles.text_style}>
          We use strictly necessary cookies if they are necessary for the
          performance of a contract with you, or because using them is in our
          legitimate interests (where we have considered that these are not
          overridden by your rights). We use all other cookies with your
          consent.
        </Text>
        <Text style={styles.text_style}>
          We use the following types of cookies:
        </Text>
        <Text style={styles.text_style}>Strictly necessary cookies</Text>
        <Text style={styles.text_style}>
          These are cookies that are required for the operation of our Sites and
          under our terms with you. They include, for example, cookies that
          enable you to log into secure areas of our Sites or (on other sites)
          use a shopping cart.
        </Text>
        {functionalityCookies.map((item, index) => (
          <View key={index}>
            <Text style={styles.text_style3}>{item}</Text>
          </View>
        ))}
        <Text style={styles.text_style}>
          These allow us to recognise and count the number of visitors and to
          see how visitors move around our Sites when they are using them. This
          helps us improve the way our Sites work, for example, by ensuring that
          users are easily finding what they are looking for.
        </Text>
        <Text style={styles.text_style}>
          These allow us to recognise and count the number of visitors and to
          see how visitors move around our Sites when they are using them. This
          helps us improve the way our Sites work, for example, by ensuring that
          users are easily finding what they are looking for.
        </Text>
        {cookiesInformationArray.map((item, index) => (
          <View key={index}>
            <Text style={styles.text_style3}>{item}</Text>
          </View>
        ))}
        <Text style={styles.text_style}>
          These cookies record your visit to our website, the pages you have
          visited and the links you have followed. We will use this information
          subject to your choices and preferences to make our Sites and the
          advertising displayed on them more relevant to your interests. We may
          also share this information with third parties for this purpose.
        </Text>
        {socialNetworkingCookies.map((item, index) => (
          <View key={index}>
            <Text style={styles.text_style3}>{item}</Text>
          </View>
        ))}
        <Text style={styles.text_style3}>
          These cookies help us manage our social media, including enabling you
          to share content and enabling us to understand how you interact with
          us. We will use this information subject to your choices and
          preferences to improve our Sites and Services. We may also share this
          information with third parties for this purpose.
        </Text>
        {socialSharingCookies.map((item, index) => (
          <View key={index}>
            <Text style={styles.text_style3}>{item}</Text>
          </View>
        ))}
        <Text style={styles.text_style}>
          We may also work with advertising networks that gather information
          about the content on our Site you visit and on information on other
          websites and services you visit. This may result in you seeing
          advertisements through our Site or our advertisements when you visit
          other websites and services of third parties. For more information
          about how to turn this feature off see below or visit
          http://www.youronlinechoices.co.uk.
        </Text>
        <Text style={styles.text_style}>Other cookies.</Text>
        <Text style={styles.text_style}>
          We also use the following cookies:
        </Text>
        {disablingCookiesInfo.map((item, index) => (
          <View key={index}>
            <Text style={styles.text_style3}>{item}</Text>
          </View>
        ))}
        <Text style={styles.text_style}>
          The effect of disabling cookies depends on which cookies you disable
          but, in general, the website may not operate properly if all cookies
          are switched off.
        </Text>
        <Text style={styles.text_style}>
          If you want to disable cookies on our website, you need to change your
          website browser settings to reject cookies. How you can do this will
          depend on the browser you use.
        </Text>
        <Text style={styles.text_style}>Microsoft Internet Explorer</Text>
        {microsoft.map((item, index) => (
          <View key={index}>
            <Text style={styles.text_style3}>{item}</Text>
          </View>
        ))}
        <Text style={styles.text_style}>Google Chrome</Text>
        {google.map((item, index) => (
          <View key={index}>
            <Text style={styles.text_style3}>{item}</Text>
          </View>
        ))}
        <Text style={styles.text_style}>Safari</Text>
        {safari.map((item, index) => (
          <View key={index}>
            <Text style={styles.text_style3}>{item}</Text>
          </View>
        ))}
        <Text style={styles.text_style}>Mozilla Firefox</Text>
        {mozilla.map((item, index) => (
          <View key={index}>
            <Text style={styles.text_style3}>{item}</Text>
          </View>
        ))}
        <Text style={styles.text_style}>Opera 6.0 and further</Text>
        {opera.map((item, index) => (
          <View key={index}>
            <Text style={styles.text_style3}>{item}</Text>
          </View>
        ))}
        <Text style={styles.text_style}>
          We may also separately prompt you regarding our use of cookies on the
          Site.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrivacyPolicy;

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
  text_style: {
    fontSize: 18,
    lineHeight: 30,
    fontFamily: "Regular",
    marginTop: 10,
  },
  text_style2: {
    fontSize: 18,
    lineHeight: 30,
    fontFamily: "Medium",
    marginTop: 13,
    marginBottom: 10,
  },
  text_style3: {
    fontSize: 18,
    lineHeight: 30,
    fontFamily: "Regular",
  },
});
