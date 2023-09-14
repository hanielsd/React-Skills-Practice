import QRCode from 'qrcode.react'
import { useState } from 'react'

export default function QRCodeGenerator() {
  const [referralLink, setReferralLink] = useState(
    'https://github.com/hanielsd'
  )

  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="">
        <div>Referral Link</div>
        <input
          type="text"
          className="outline-none p-2 border-2 border-transparent border-gray-200 focus:border-blue-600 rounded"
          value={referralLink}
          onChange={(e) => setReferralLink(e.target.value)}
        />
      </div>
      <QRCode value={referralLink} />
    </div>
  )
}
