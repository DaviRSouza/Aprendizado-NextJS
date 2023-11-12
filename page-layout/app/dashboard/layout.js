export default function dashboardLayout({ children }) {
  return (
    <>
        <nav className='bg-blue-600'>
            <ul>
                <li>Perfil</li>
                <li>Conta</li>
            </ul>
        </nav>
        {children}
    </>
  )
}