
import styles from './TermsAndConditionsView.module.css';
import { useNavigate } from 'react-router-dom';


const TermsAndConditionsView = () => {

    const navigate = useNavigate();
    
    function handleSubmit(event) {
        event.preventDefault();
        navigate('/register');
    }


  return (
    
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>PLAYFETCH</h1>
        <div className={styles.subtitle}>Terms & Conditions of Service</div>
      </div>
      
      <div className={styles.lastUpdated}>Last Updated: August 15, 2025</div>
      
      <div className={styles.intro}>
        Welcome to PlayFetch! These Terms & Conditions ("Terms") constitute a legally binding agreement between you and PlayFetch regarding your use of our website, mobile application, and related services (collectively, the "Service"). By creating an account, accessing our platform, or using any of our services, you acknowledge that you have read, understood, and agree to be bound by these Terms in their entirety.
      </div>
      
      <div className={styles.section}>
        <h2>1. Acceptance and Modification of Terms</h2>
        <p>Your continued use of PlayFetch following any modifications to these Terms constitutes your acceptance of such changes. We reserve the right to update, modify, or replace these Terms at any time without prior notice. It is your responsibility to review these Terms periodically for changes. If you do not agree with any modifications, you must discontinue use of the Service immediately.</p>
      </div>
      
      <div className={styles.section}>
        <h2>2. Waiver of Liability and Assumption of Risk</h2>
        <p><span className={styles.emphasis}>PlayFetch does not supervise, monitor, or control playdates, meetings, or interactions arranged through our platform.</span> We are not responsible for any harm, injury, illness, property damage, loss, or death of any pet, person, or property related to or arising from any playdate or interaction facilitated through our Service.</p>
        <p>By using PlayFetch, you expressly assume all risks associated with pet playdates and interactions, including but not limited to: pet injuries, behavioral incidents, property damage, personal injury, theft, or any other unforeseen circumstances. You voluntarily release, discharge, and hold harmless PlayFetch, its officers, directors, employees, affiliates, and agents from any and all claims, demands, or causes of action arising from your use of the Service.</p>
      </div>
      
      <div className={styles.section}>
        <h2>3. Pet Health, Safety, and Behavioral Requirements</h2>
        <div className={styles.subsection}>
          <h3>3.1 Health Certifications</h3>
          <p>You affirm and warrant that your pet is current on all required vaccinations as recommended by a licensed veterinarian, including but not limited to rabies, distemper, and parvovirus. Your pet must be on appropriate flea, tick, and heartworm prevention as recommended by veterinary professionals.</p>
        </div>
        <div className={styles.subsection}>
          <h3>3.2 Behavioral History</h3>
          <p>You represent that your pet has never caused serious harm, injury, or demonstrated aggressive behavior toward another animal or person. You agree to immediately update your pet's profile if any behavioral incidents occur and to disclose any relevant behavioral history to potential playdate partners.</p>
        </div>
        <div className={styles.subsection}>
          <h3>3.3 Ongoing Obligations</h3>
          <p>You must maintain accurate and current information regarding your pet's health, vaccination status, and behavioral history. Providing false, misleading, or outdated information may result in immediate account suspension or termination and may expose you to legal liability.</p>
        </div>
      </div>
      
      <div className={styles.section}>
        <h2>4. Privacy and Data Protection</h2>
        <p>Personal information shared through PlayFetch may only be used for the express purpose of arranging and coordinating pet playdates through our platform's designated communication tools. Any use of other users' personal information for marketing purposes, harassment, solicitation, or any purpose unrelated to pet playdates is strictly prohibited and may result in immediate account termination and potential legal action.</p>
        <p>Users must respect the privacy and safety of all community members and are prohibited from sharing contact information outside the platform without explicit consent from all parties involved.</p>
      </div>
      
      <div className={styles.section}>
        <h2>5. User Conduct and Community Standards</h2>
        <p>Users are expected to maintain respectful, honest, and safe interactions within the PlayFetch community. Prohibited activities include but are not limited to: providing false information, harassment, inappropriate communication, commercial solicitation, or any behavior that compromises the safety and enjoyment of other users and their pets.</p>
      </div>
      
      <div className={styles.section}>
        <h2>6. Account Termination</h2>
        <p>PlayFetch reserves the right to suspend or terminate user accounts at any time for violations of these Terms, suspicious activity, or any behavior deemed harmful to the community. Users may also terminate their accounts at any time by contacting customer support.</p>
      </div>
      
      <div className={styles.section}>
        <h2>7. Governing Law and Jurisdiction</h2>
        <p>These Terms and your use of PlayFetch are governed by the laws of the State of Ohio, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of the Service shall be subject to the exclusive jurisdiction of the courts located in Ohio, as well as any relevant local jurisdiction where PlayFetch-facilitated activities occur.</p>
      </div>
      
      <div className={styles.section}>
        <h2>8. Severability</h2>
        <p>If any provision of these Terms is deemed invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect, and the invalid provision shall be replaced with a valid provision that most closely reflects the original intent.</p>
      </div>
      
      <div className={styles.footer}>
        By submitting your registration for an account on PlayFetch, you confirm that you have read, understood, and agreed to these Terms & Conditions in their entirety.
      </div>
    <form onSubmit={handleSubmit}>
      <input
              type="checkbox"
              id="termsAndConditions"
              name="termsAndConditions"
              required
            />
            <label>
              I accept the PlayFetch terms and conditions.
            </label>
            <br />

            
        <button type="submit" className={styles.submitButton}>
          submit agreement & return to complete registration
        </button>

        </form> 
    </div>

  );
};

export default TermsAndConditionsView