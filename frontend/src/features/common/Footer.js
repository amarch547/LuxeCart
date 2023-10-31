function Footer() {
  return (
    <>
      <div className=" bg-gray-900">
        <div className="max-w-2xl mx-auto text-white py-3">
          <div className="text-center">
            <h3 className="text-xl"> Download our Ecommerce App </h3>
            <div className="flex justify-center my-3">
              <div className="flex border w-auto rounded-lg px-4 py-2 mx-2 cursor-pointer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888857.png" alt="appstore"
                  className="w-7 md:w-8"
                />
                <div className="text-left ml-3">
                  <p className="text-xs md:tex-xs text-gray-200">Download on </p>
                  <p className="text-xs md:text-xs"> Google Play Store </p>
                </div>
              </div>
              <div className="flex border w-auto rounded-lg px-4 py-2 mx-2 cursor-pointer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888841.png" alt="playstore"
                  className="w-7 md:w-8"
                />
                <div className="text-left ml-3">
                  <p className="text-xs md:text-xs text-gray-200">Download on </p>
                  <p className="text-xs md:text-xs"> Apple Store </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 flex flex-col md:flex-row md:justify-around items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-4 md:mt-0">
              {' '}
              ©amarch547, 2023{' '}
            </p>
            <div className="order-1 md:order-2">
              <span className="px-2 hover:text-gray-300 cursor-pointer">About us</span>
              <span className="px-2 hover:text-gray-300 cursor-pointer">Contact us</span>
              <span className="px-2 hover:text-gray-300 cursor-pointer">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
