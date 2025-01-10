import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import { CustomInput } from './CustomInput'
import { CustomSelect } from './CustomSelect'
import { CustomButton } from './CustomButton'
import ImageUpload from './ImageUpload'

const sections = [
  { id: 'personal', title: 'Personal Information' },
  { id: 'academic', title: 'Academic Information' },
  { id: 'contact', title: 'Contact Information' },
  { id: 'class', title: 'Class Information' },
]

const instruments = [
  'Acoustic Guitar', 'Electric Guitar', 'Bass Guitar', 'Piano', 'Keyboard',
  'Drums', 'Violin', 'Viola', 'Cello', 'Flute', 'Clarinet', 'Saxophone',
  'Trumpet', 'Trombone', 'French Horn', 'Tuba', 'Harp', 'Ukulele', 'Banjo',
  'Mandolin', 'Accordion', 'Harmonica', 'Sitar', 'Tabla', 'Djembe'
]

const classLocations = [
  { id: 'location1', name: 'Downtown Studio', address: '123 Main St, City' },
  { id: 'location2', name: 'Suburb Center', address: '456 Oak Ave, Town' },
]

export default function StudentRegistrationForm() {
  const [activeSection, setActiveSection] = useState('personal')
  const [formDataToSend, setformDataToSend] = useState({
    firstName: '',
    lastName: '',
    fathersName: '',
    address: '',
    schoolOrCollege: '',
    profileImage: '',
    mobileNumber: '',
    email: '',
    dob: '',
    educationalQualification: '',
    district: '',
    state: '',
    pincode: '',
    batchTime: '',
    instrument: '',
    fees: 1400,
    classLocation: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setformDataToSend((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setformDataToSend((prev) => ({
        ...prev,
        profileImage: e.target.files[0],
      }))
    }
  }

  const initiateRazorpayCheckout = (amount) => {

    let data = JSON.stringify({
      amount: amount * 100,
      currency: "INR"
    })

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://green-band-back.vercel.app/api/RazorPayment",
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    }

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data))
        handleRazorpayScreen(response.data.amount)
      })
      .catch((error) => {
        console.log("error at", error)
      })
  }

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");

      script.src = src;

      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }

      document.body.appendChild(script);
    })
  }


  const handleRazorpayScreen = async (amount) => {
    const res = await loadScript("https:/checkout.razorpay.com/v1/checkout.js")

    if (!res) {
      alert("Some error at razorpay screen loading")
      return;
    }

    const options = {
      key: 'rzp_test_b6CvqawNL5dJfe',
      amount: amount,
      currency: 'INR',
      name: "GreenBand",
      description: "GreenBand Admission Fees",
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2Fblack-panther-black-panther-logo-movies-the-avengers-1080p-wallpaper-hdwallpaper-deskto--724094446348455532%2F&psig=AOvVaw3n_6vMGuQ_lO_7HIwH6dHb&ust=1736349458260000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIi7tfjz44oDFQAAAAAdAAAAABAE",
      handler: function (response) {
        console.log(response)
      },
      prefill: {
        name: "GreenBand",
        email: "adityasuryawanshi5451@gmail.com"
      },
      theme: {
        color: "#F4C430"
      }
    }

    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formDataToSend)
    try {

      const response = await axios.post('https://green-band-back.vercel.app/api/AddNewUser', formDataToSend, { withCredentials: true })
      console.log('User registered:', response.data)

      if (response.status === 201) {
        alert('User Registered on GreenBand')
      }

      const formdata = new FormData();
      formdata.append('image', formDataToSend.profileImage);
      formdata.append('userid', response.data.User._id)

      const headers = {
        'Content-Type': 'multipart/form-data',
      }
      const ImageUploadResponse = await axios.post('https://green-band-back.vercel.app/api/UploadImage', formdata, { withCredentials: true }, { Headers: headers })

      console.log('Image Uploaded registered:', ImageUploadResponse.data)

      if (ImageUploadResponse.status === 200) {
        alert('Image Uploaded on GreenBand')
      }

    } catch (error) {
      console.error('Error registering User to GreenBand:', error)
    }
  }

  const nextSection = (e) => {
    e.preventDefault()
    const currentIndex = sections.findIndex(section => section.id === activeSection)
    if (currentIndex < sections.length - 1) {
      setActiveSection(sections[currentIndex + 1].id)
    }
  }

  const progress = ((sections.findIndex(section => section.id === activeSection) + 1) / sections.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-2xl overflow-hidden w-full max-w-6xl flex flex-col md:flex-row"
      >
        <nav className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-6 md:w-1/4 flex flex-col">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold mb-6"
          >
            GreenBand
          </motion.h1>
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-px bg-white mb-6"
          />
          <h2 className="text-2xl font-bold mb-6">Registration</h2>
          <ul className="space-y-2 md:space-y-4 flex-grow">
            {sections.map((section, index) => (
              <motion.li
                key={section.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left p-2 rounded-md transition-colors duration-200 ease-in-out ${activeSection === section.id ? 'bg-white text-blue-600' : 'hover:bg-white/10'
                    }`}
                >
                  <span className="mr-2">{index + 1}.</span>
                  {section.title}
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>
        <main className="p-6 flex-grow">
          <div className="mb-6 bg-gray-200 h-2 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-blue-600"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <form className="space-y-6">
            <AnimatePresence mode="wait">
              {activeSection === 'personal' && (
                <motion.div
                  key="personal"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-semibold mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="mb-4">
                      <ImageUpload
                        profileImage={formDataToSend.profileImage}
                        onFileChange={handleFileChange}
                      />
                    </div>
                    <CustomInput
                      label="First Name"
                      name="firstName"
                      value={formDataToSend.firstName}
                      onChange={handleInputChange}
                      required
                    />
                    <CustomInput
                      label="Last Name"
                      name="lastName"
                      value={formDataToSend.lastName}
                      onChange={handleInputChange}
                      required
                    />
                    <CustomInput
                      label="Father's Name"
                      name="fathersName"
                      value={formDataToSend.fathersName}
                      onChange={handleInputChange}
                      required
                    />
                    <CustomInput
                      label="Date of Birth"
                      name="dob"
                      type="date"
                      value={formDataToSend.dob}
                      onChange={handleInputChange}
                      required
                    />

                  </div>
                </motion.div>
              )}

              {activeSection === 'academic' && (
                <motion.div
                  key="academic"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-semibold mb-4">Academic Information</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <CustomInput
                      label="School/College"
                      name="schoolOrCollege"
                      value={formDataToSend.schoolOrCollege}
                      onChange={handleInputChange}
                      required
                    />
                    <CustomInput
                      label="Educational Qualification"
                      name="educationalQualification"
                      value={formDataToSend.educationalQualification}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </motion.div>
              )}

              {activeSection === 'contact' && (
                <motion.div
                  key="contact"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <CustomInput
                      label="Email"
                      name="email"
                      type="email"
                      value={formDataToSend.email}
                      onChange={handleInputChange}
                      required
                    />

                    <CustomInput
                      label="Address"
                      name="address"
                      value={formDataToSend.address}
                      onChange={handleInputChange}
                      required
                    />
                    <CustomInput
                      label="Mobile Number"
                      name="mobileNumber"
                      type="number"
                      value={formDataToSend.mobileNumber}
                      onChange={handleInputChange}
                      required
                    />
                    <CustomInput
                      label="District"
                      name="district"
                      value={formDataToSend.district}
                      onChange={handleInputChange}
                      required
                    />
                    <CustomInput
                      label="State"
                      name="state"
                      value={formDataToSend.state}
                      onChange={handleInputChange}
                      required
                    />
                    <CustomInput
                      label="Pincode"
                      name="pincode"
                      value={formDataToSend.pincode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </motion.div>
              )}

              {activeSection === 'class' && (
                <motion.div
                  key="class"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-semibold mb-4">Class Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <CustomSelect
                      label="Instrument"
                      name="instrument"
                      value={formDataToSend.instrument}
                      onChange={handleInputChange}
                      options={instruments}
                      required
                    />
                    <CustomInput
                      label="Fees"
                      name="fees"
                      type="number"
                      value={formDataToSend.fees}
                      contenteditable="false"
                    />
                    <CustomInput
                      label="Batch Time"
                      name="batchTime"
                      value={formDataToSend.batchTime}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Class Locations</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {classLocations.map((location) => (
                      <motion.div
                        key={location.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                      >
                        <label className="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="classLocation"
                            value={location.id}
                            checked={formDataToSend.classLocation === location.id}
                            onChange={handleInputChange}
                            className="form-radio text-blue-600"
                            required
                          />
                          <span>
                            <strong>{location.name}</strong>
                            <br />
                            {location.address}
                          </span>
                        </label>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              className="flex justify-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {activeSection !== 'class' ? (
                <CustomButton type="button" onClick={nextSection}>
                  Next
                </CustomButton>
              ) : (
                <>
                  <CustomButton onClick={(e) => {
                    e.preventDefault();
                    initiateRazorpayCheckout(1400)
                  }}>
                    Pay Fees
                  </CustomButton>
                  <>  <CustomButton onClick={handleSubmit} type="submit" style={{ marginLeft: '30px' }} >
                    Submit Registration
                  </CustomButton></>
                </>
              )}
            </motion.div>
          </form>
        </main>
      </motion.div>
    </div>
  )
}