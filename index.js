const axios = require('axios');

async function checkDomainAvailability(domain) {
  const apiKey = 'UzQxLikm_46KxDFnbjN7cQjmw6wocia:46L26ydpkwMaKZV6uVdDWe';
  const goDadddyUrl = 'https://api.ote-godaddy.com/v1/domains/available?checkType=FAST';
  const data = [domain];
  const options = {
    headers: { Authorization: `sso-key ${apiKey}` }
  };

  return axios.post(goDadddyUrl, data, options)
  .then(response => {
     const siteIsAvail = response.data.domains[0].available;
     return `${domain} is ${siteIsAvail ? 'available' : 'unavailable'}`;
  })
  .catch(console.log);
}

module.exports = checkDomainAvailability;
