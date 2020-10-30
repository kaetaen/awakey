export function signIn(){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
				token: 'ALeKk02G0qQyeFUIPxUx1xiaaCNsi_e2Yew',
					user: {
						name: 'Rubens dos Santos',
						email: 'kaetaen@tutanota.com'
		      }
      	})
    }, 2000);
  })
}

