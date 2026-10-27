import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-auto shrink-0 border-t border-(--border-subtle) bg-(--bg-primary) text-(--text-secondary)">
      <div className="wrapper flex items-center justify-center py-6 sm:py-8">
        <p className="text-center text-sm leading-6">
          &copy; {new Date().getFullYear()} Bookified. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
