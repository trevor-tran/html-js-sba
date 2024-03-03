
const dropdownOptions = [
  {
    value: "applied",
    label: "Applied"
  },
  {
    value: "rejected",
    label: "Applied"
  },
  {
    value: "behavioral_interview",
    label: "Behavioral interview completed"
  },
  {
    value: "technical_interview",
    label: "Technical interview completed"
  },
  {
    value: "offer_letter",
    label: "Offer letter received"
  }
]

// validate url link
function isUrlValid(url) {
  const link = url.trim();
  if (!link || link.length == 0) return false;
  // source https://www.freecodecamp.org/news/how-to-write-a-regular-expression-for-a-url/
  const regex = /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/;
  return regex.test(link);
}

// validate user inputs
function isValid(company, url, status) {
  return company.trim().length > 0 && isUrlValid(url) && status !== "none";
}

function addApplication(event) {
  //prevent default form button click
  event.preventDefault();

  // get user inputs
  const company = $("#company").val();
  const link = $("#job_link").val();
  const selectedStatus = $("#status").val();

  // validate user inputs
  if (!isValid(company, link, selectedStatus)) {
    alert("Invalid inputs");
    return;
  }

  // make a dropdown with selected value and add to table
  let dropdown = "<select>"
  for (let option of dropdownOptions) {
    const {value, label} = option;
    if (selectedStatus === value) {
      dropdown += `<option selected value="${value}">${label}</option>`
    } else {
      dropdown += `<option value="${value}">${label}</option>`
    }
  }
  dropdown += "</select>";

  // insert to table
  $("#application-table > tbody:last-child").append(`
    <tr>
      <td>${company}</td>
      <td><a href="${link}" target="_blank">${link}</a></td>
      <td>${dropdown}</td>
    </tr>
  `)
}