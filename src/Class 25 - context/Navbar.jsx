import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import UserContext from './usercontext'

const NavBar = (props) => {
  const { logout } = React.useContext(UserContext)
  return (
    <Layout>
      <Layout.Header className='header'>
        <div className='flex flex-grow justify-end gap-20'>
          <Menu
            theme='dark'
            mode='horizontal'
            items={[
              {
                key: 'userinfo',
                label: <Link to='info'>User Info</Link>,
              },
              {
                key: 'repos',
                label: <Link to='repos'>Repos</Link>,
              },
              {
                key: 'logout',
                label: <div onClick={logout}>Logout</div>,
              },
            ]}
          />
        </div>
      </Layout.Header>
      <Layout.Content className='p-16'>
        <Outlet />
      </Layout.Content>
    </Layout>
  )
}

export default NavBar
