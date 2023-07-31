import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import Telegram from "../assets/images/Telegram.png";
import LinkedIn from "../assets/images/LinkedIn.svg";
import Github from "../assets/images/Github.svg";
import Axios from "../utils/Axios";
import { Alert, Snackbar } from "@mui/material";

const Contact = () => {
  const formRef = useRef();
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [errWord, setErrWord] = useState();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name) {setErrWord("Please provide a name!"); return setOpenError(true); };
    if (!form.email) {setErrWord("Please provide an email!"); return setOpenError(true); };
    if (!form.message){setErrWord("Hey! Say what you want to say!"); return setOpenError(true) };
    if (form.email && form.message && form.name) {
      console.log(form);
      setLoading(true);
      await Axios.post("/sendemail", form)
        .then((res) => {
          console.log(res);
          setLoading(false);
          setForm({
            name: "",
            email: "",
            message: "",
          });
          setOpenSuccess(true);
        })
        .catch((err) => {
          console.log(err);
          setErrWord(err.response.statusText);
          setOpenError(true);
          setLoading(false);
        });

      // async function postObject(url, object) {
      //   try {
      //     const response = await axios.post(url, object);
      //     console.log("Object posted successfully!");
      //     console.log("Response:", response.data);
      //   } catch (error) {
      //     console.error("Error posting object:", error.message);
      //   }
      // }

      // const apiUrl = "http://localhost/sendemail";
      // const objectToPost = form;

      // postObject(apiUrl, objectToPost);
    }
    else setLoading(false);
    // sendEmail(form.name, form.email, form.message)
  };
  return (
    <>
      <Snackbar
        open={openSuccess}
        autoHideDuration={6000}
        onClose={() => setOpenSuccess(false)}
      >
        <Alert
          onClose={() => setOpenSuccess(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          The message was sent successfully!
        </Alert>
      </Snackbar>
      <Snackbar
        open={openError}
        autoHideDuration={6000}
        onClose={() => setOpenError(false)}
      >
        <Alert
          onClose={() => setOpenError(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          {errWord ? errWord : "Something went wrong!"}
        </Alert>
      </Snackbar>
      <div className="flex flex-col">
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="flex-[0.75] bg-black-100 p-8 rounded-2xl "
          >
            <p className={styles.sectionSubText}>Get in touch</p>
            <p className={styles.sectionHeadText}>Contact.</p>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col gap-8"
            >
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="bg-tertiary py-4  px-6 placeholder:text-secondary text-white outline-none rounded-lg border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className="bg-tertiary py-4  px-6 placeholder:text-secondary text-white outline-none rounded-lg border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  Your Message
                </span>
                <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  className="bg-tertiary py-4  px-6 placeholder:text-secondary text-white outline-none rounded-lg border-none font-medium"
                />
              </label>
              <button
                type="submit"
                className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </motion.div>
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
          >
            <EarthCanvas />
          </motion.div>
        </div>
        <motion.div
          variants={slideIn("up", "tween", 0.2, 1)}
          className="flex-[0.75] items-center justify-center flex flex-col w-full mt-10 bg-black-200 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Stay in touch</p>
          <p className={styles.sectionHeadText}>Just Say Hello!</p>
          <div className="py-16  w-full">
            {/* <a href="mailto:sunatila6391@gmail.com" className="text-[20px] w-20 h-20 rounded-2xl bg-white text-tertiary font-bold tracking-wider p-8 cursor-pointer">Contact</a> */}
            {/* <p className="mt-20 text-[25px] font-bold ml-auto mr-auto mb-10 w-auto">Social Media</p> */}
            <div className="w-full flex justify-evenly items-center">
              <a
                href="https://t.me/BxDxBxY"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Telegram}
                  width={50}
                  height={50}
                  alt="telegram-icon"
                />
              </a>
              <a
                // href="https://www.linkedin.com/in/abdukahhor-iskandarov-a9268025b"
                href="https://www.linkedin.com/in/abdukaxxor-iskandarov-a9268025b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={LinkedIn}
                  width={50}
                  height={50}
                  alt="telegram-icon"
                />
              </a>
              <a
                href="https://www.instagram.com/iskandarov_vevo"
                className=" inline-block rounded-full p-3 bg-[#d944d2] text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="white"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
              <a
                href="https://github.com/BxDxBxY"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Github} width={50} height={50} alt="telegram-icon" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
