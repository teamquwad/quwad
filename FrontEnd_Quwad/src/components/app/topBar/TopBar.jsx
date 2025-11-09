import { Link } from 'react-router-dom'
import QuwadIcon from '../quwadIcon/QuwadIcon'

function TopBar() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <QuwadIcon />
        <div className="flex gap-[20px] items-center">
          <div className="p-[5px] max-w-[32px] bg-[#000] flex justify-center rounded-[20px]">
            <div className="max-w-[20px] rounded-[20px]">
              <img
                className="w-full"
                src="/icons/rocket-icon.png"
                alt="rocket icon"
              />
            </div>
          </div>
          <p>Mariappan Nallathambi</p>
          <div>
            <Link to="/" className="text-red-600">
              Sign out
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
