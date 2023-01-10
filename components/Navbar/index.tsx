import Logo from '@components/shared/Logo';
import { signIn, signOut, useSession } from 'next-auth/react';

import styles from './navbar.module.css';

import CustomThemeSwitch from '@components/Switch/CustomThemeSwitch';

export default function Navbar() {
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  return (
    <div className="py-4 w-full dark:text-white dark:bg-black">
      <nav className="flex w-full">
        <div className="flex">
          <Logo />
        </div>
        <div className={styles.signedInStatus}>
          <p
            className={`nojs-show ${
              !session && loading ? styles.loading : styles.loaded
            }`}
          >
            {!session && (
              <>
                <span>You are not signed in</span>
                <button className={`${styles.button} ${styles.buttonPrimary}`}>
                  <a
                    href={`/api/auth/signin`}
                    onClick={(e) => {
                      e.preventDefault();
                      signIn();
                    }}
                  >
                    Sign in
                  </a>
                </button>
              </>
            )}
            {session?.user && (
              <>
                {session.user.image && (
                  <span
                    style={{ backgroundImage: `url('${session.user.image}')` }}
                    className={styles.avatar}
                  />
                )}
                <span className={styles.signedInText}>
                  <small>Signed in as</small>
                  <br />
                  <strong>{session.user.email ?? session.user.name}</strong>
                </span>
                <a
                  href={`/api/auth/signout`}
                  className={styles.button}
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                >
                  Sign out
                </a>
              </>
            )}
          </p>
        </div>
        <div className="ml-auto px-4">
          <CustomThemeSwitch />
        </div>
      </nav>
    </div>
  );
}
