'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from "next/head";
import Link from 'next/link'

import '../../css/admin-css/app-dark.css';

import { login } from './actions'

export default function Page() {
  // const session = await getSession()

  // if (session) {
  //   redirect('/admin')
  // }

  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   setError('');

  //   const { error } = await supabase.auth.signInWithPassword({
  //     email,
  //     password,
  //   });

  //   if (error) {
  //     setError(error.message);
  //   } else {
  //     router.push('/admin');
  //   }
  // };

  return (
    <>
      <div className="wrapper vh-100">
        <div className="row align-items-center h-100">
          <form
            className="col-lg-3 col-md-4 col-10 mx-auto text-center"
            
          >
            <a
              className="navbar-brand mx-auto mt-2 flex-fill text-center"
              href="/"
            >
              <img src="/rnd.svg" width="80%" style={{maxWidth:"250px"}}/>
            </a>
            <br />
            <br />
            <br />
            <h1 className="h4 mb-3">Login</h1>
            <div className="form-group">
              <label htmlFor="inputEmail" className="sr-only">
                Email address
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="inputEmail"
                className="form-control form-control-lg"
                placeholder="Email address"
                
                autoFocus={true}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword" className="sr-only">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="inputPassword"
                className="form-control form-control-lg"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="checkbox mb-2">
              <label>
                {error && <p className="text-danger mb-4">{error}</p>}              
              </label>
            </div>
            <button formAction={login} className="btn btn-lg btn-primary btn-block" type="submit">
              Login
            </button>
            <p className="mt-5 mb-3 text-muted">
              © 2025, Developed &amp; Managed by RNDWebTech.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}