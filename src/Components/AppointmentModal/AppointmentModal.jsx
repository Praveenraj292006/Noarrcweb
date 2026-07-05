import React from "react";
import { useAppointment } from "../../Context/AppointmentContext";
import styles from "./AppointmentModal.module.css";
import ContactForm from "../../Sections/ContactForm/ContactForm";

function AppointmentModal() {

    const { open, setOpen } = useAppointment();

    if (!open) return null;

    return (

        <div className={styles.overlay}>

            <div className={styles.modal}>

                <button
                    onClick={()=>setOpen(false)}
                    className={styles.close}
                >
                    Close
                </button>

                <ContactForm />

            </div>

        </div>

    )

}

export default AppointmentModal;