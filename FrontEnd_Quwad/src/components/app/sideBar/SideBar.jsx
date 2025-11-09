import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <div className="pt-[200px] flex justify-center">
      <div className="flex flex-col gap-[20px]">
        <Link
          to="/dashboard"
          className="p-[5px] max-w-[32px] bg-[#FFF] border border-[#000] rounded-[20px] flex justify-center items-center"
        >
          <div className="max-w-[20px] rounded-[20px]">
            <img
              className="max-full"
              src="icons/rocket-icon.png"
              alt="Rocket Icon"
            />
          </div>
        </Link>

        <Link
          to="/products"
          className="p-[5px] max-w-[32px] bg-[#FFF] border border-[#000] rounded-[20px] flex justify-center items-center"
        >
          <div className="max-w-[20px] rounded-[20px]">
            <img
              className="max-full"
              src="icons/products-icon.png"
              alt="Products Icon"
            />
          </div>
        </Link>

        <Link
          to="/payments"
          className="p-[5px] max-w-[32px] bg-[#FFF] border border-[#000] rounded-[20px] flex justify-center items-center"
        >
          <div className="max-w-[20px] rounded-[20px]">
            <img
              className="max-full"
              src="icons/payments-icon.png"
              alt="Payments Icon"
            />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default SideBar
