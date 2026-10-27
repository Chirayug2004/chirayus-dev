
import { useState, useEffect } from "react";
import { motion } from "motion/react";

function LoaderText() {
    const text = "CHIRAYU's-DEV";
    const [display, setDisplay] = useState("");

    useEffect(() => {
        let i = 0;

        const timer = setInterval(() => {
            i++;
            setDisplay(text.slice(0, i));

            if (i >= text.length) {
                clearInterval(timer);
            }
        }, 150);

        return () => clearInterval(timer);
    }, []);

    return (
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {display} <span style={{ color: "#a3ff68" }}>.</span>|
        </motion.h1>
    );
}

export default LoaderText;
