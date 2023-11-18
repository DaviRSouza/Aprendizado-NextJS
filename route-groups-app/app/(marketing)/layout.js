import React from 'react'

function MarketingLayout({ children }) {
  return (
    <html>
      <body>
        <div>
          <h1>MarketingLayout</h1>
          {children}
        </div>
      </body>
    </html>
  )
}

export default MarketingLayout