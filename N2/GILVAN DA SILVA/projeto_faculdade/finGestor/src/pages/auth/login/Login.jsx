import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import AuthLayout from '../../../layouts/authLayout/AuthLayout'
import AreaGridAuth from '../../../components/areaGridAuth/AreaGridAuth'
import InputIconComponent from '../../../components/inputIconComponent/InputIconComponent'
import UserApi from '../../../api/UserApi'
import imgLogin from '../../../assets/img/login.png'
import Alerts from '../../../helpers/alerts/Alerts'
import Button from '../../../components/button/Button'
import ButtonLoading from '../../../components/buttonLoading/ButtonLoading'

const Login = () => {

  let navigate = useNavigate()
  const [loading, setLoading] = React.useState(false)
  const [email, setEmail] = React.useState('')
  const [messageEmail, setMessageEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [messagePassword, setMessagePassword] = React.useState('')

  React.useEffect(() => {
    if (localStorage.getItem("email"))
      navigate('/home')
  }, [])

  const submit = (e) => {
    e.preventDefault()

    !email ?
      setMessageEmail('Email é um campo obrigatório!')
      :
      setMessageEmail('')

    !password ?
      setMessagePassword('Senha é um campo obrigatório!')
      :
      setMessagePassword('')


    if (email && password) {

      setLoading(true)
      UserApi.getByEmailAndPassword(email, password)
        .then(resp => {
          if (!resp.data.error) {
            console.log(resp.data.response.user)

            localStorage.setItem('id', resp.data.response.user.id)
            localStorage.setItem('name', resp.data.response.user.username)
            localStorage.setItem('email', resp.data.response.user.username)
            Alerts.success(`Bem vindo, ${resp.data.response.user.username}`)

            setTimeout(() => {
              navigate('/home')
            }, 1000)
          } else {
            Alerts.danger('Email ou senha incorreto!')
          }
          setLoading(false)
        })
        .catch(error => {
          console.log(error)
        })

    }

  }

  return (
    <AuthLayout>
      <AreaGridAuth
        left={
          <img width="100%" src={imgLogin} alt="" />
        }

        right={
          <div>
            <h5 className='pb-3 text-center'>LOGIN</h5>

            <form onSubmit={submit} action="" method='POST'>

              <InputIconComponent
                icon={<i className="bi bi-envelope-fill"></i>}
                input={
                  <input
                    onChange={e => setEmail(e.target.value)}
                    type="text"
                    className="form-control p-2"
                    placeholder="username"
                  />
                }
                message={messageEmail}
              />

              <InputIconComponent
                icon={<i className="bi bi-key-fill"></i>}
                input={
                  <input
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    className="form-control p-2"
                    placeholder="Senha"
                  />
                }
                message={messagePassword}
              />

              <div className="d-grid gap-2">
                {
                  !loading
                    ?
                    <Button
                      class="btn btn-primary shadow-sm"
                      type="submit"
                      text="Entrar"
                    />
                    :
                    <ButtonLoading />
                }
              </div>

              <div className='m-4 texts-register text-center'>
                <Link className='text-dark' to='/register'>Cadastre-se</Link>
              </div>

            </form>
          </div>
        }
      />
    </AuthLayout>
  )

}

export default Login