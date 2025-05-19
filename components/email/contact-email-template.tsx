import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailTemplateProps {
  formData: {
    name: string;
    email: string;
    gmailEmail?: string;
    subject: string;
    message: string;
    inquiryType: {
      generalInquiry: boolean;
      outsourcing: boolean;
      partnership: boolean;
      bookMeeting: boolean;
    };
    entityType: string;
    companyEmployees?: string;
    companyIndustry?: string;
    companyDomain?: string;
    portfolioLink?: string;
    portfolioType?: string;
  };
}

export const ContactEmailTemplate = ({
  formData,
}: ContactEmailTemplateProps) => {
  const inquiryTypes = Object.entries(formData.inquiryType)
    .filter(([_, value]) => value)
    .map(([key]) => key.replace(/([A-Z])/g, " $1").trim());

  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission from {formData.name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Form Submission</Heading>

          <Section style={section}>
            <Text style={text}>
              <strong>Name:</strong> {formData.name}
            </Text>
            <Text style={text}>
              <strong>Email:</strong> {formData.email}
            </Text>
            {formData.gmailEmail && (
              <Text style={text}>
                <strong>Gmail:</strong> {formData.gmailEmail}
              </Text>
            )}
            <Text style={text}>
              <strong>Subject:</strong> {formData.subject}
            </Text>
            <Text style={text}>
              <strong>Message:</strong> {formData.message}
            </Text>
          </Section>

          <Section style={section}>
            <Text style={text}>
              <strong>Inquiry Types:</strong> {inquiryTypes.join(", ")}
            </Text>
            <Text style={text}>
              <strong>Entity Type:</strong> {formData.entityType}
            </Text>
          </Section>

          {formData.entityType === "company" && (
            <Section style={section}>
              <Text style={text}>
                <strong>Company Details:</strong>
              </Text>
              {formData.companyEmployees && (
                <Text style={text}>Employees: {formData.companyEmployees}</Text>
              )}
              {formData.companyIndustry && (
                <Text style={text}>Industry: {formData.companyIndustry}</Text>
              )}
              {formData.companyDomain && (
                <Text style={text}>Website: {formData.companyDomain}</Text>
              )}
            </Section>
          )}

          {formData.entityType === "individual" && formData.portfolioLink && (
            <Section style={section}>
              <Text style={text}>
                <strong>Portfolio:</strong>
              </Text>
              <Text style={text}>Type: {formData.portfolioType}</Text>
              <Text style={text}>Link: {formData.portfolioLink}</Text>
            </Section>
          )}
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "580px",
};

const section = {
  padding: "24px",
  backgroundColor: "#f6f9fc",
  borderRadius: "8px",
  marginBottom: "16px",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const text = {
  color: "#333",
  fontSize: "16px",
  margin: "8px 0",
};

export default ContactEmailTemplate;
