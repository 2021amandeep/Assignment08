import React,{useState} from 'react';
import '../../App.css';

 function SignUp() {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [entry, setEntry] = useState([]);

  const submitForm = (e) => {
      e.preventDefault();
      const newEntry = { email: email, pass: pass };
      setEntry([...entry, newEntry]);

      setEmail("");
      setPass("");
  }
  return (<>
    <div className="container1">
    <div class='bold-line'></div>
        <div className="window">
        {/* <div class='overlay'></div> */}
            <form action="" onSubmit={submitForm} >
                <div className="content">
                <div className="welcome">Please login to Continue...</div><hr/>
                <div className="input-fields">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" autoComplete="off"
                            value={email} onChange={(e) => setEmail(e.target.value)}
                            class='input-line ' required />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" autoComplete="off"
                            value={pass} onChange={(e) => setPass(e.target.value)}
                            class='input-line ' required />
                    </div>
                </div>
                </div><br/><br/>
                <button type="submit" class='ghost-round'>Log-in</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default SignUp;