// formatDate function
function formatDate(date) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
  return formattedDate
}

// trim function
function trim(str) {
  return str.trim()
}

// capitalize function
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// isEmpty function
function isEmpty(obj) {
  return Object.keys(obj).length === 0
}

// debounce function
function debounce(func, delay) {
  let timeoutId
  return function () {
    const context = this
    const args = arguments
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(context, args), delay)
  }
}

// sortBy function
function sortBy(arr, prop) {
  return arr.sort((a, b) => a[prop] - b[prop])
}

// unique function
function unique(arr) {
  return [...new Set(arr)]
}

// parseQueryString function
function parseQueryString(queryString) {
  const params = {}
  const queries = queryString.split('&')
  for (let i = 0; i < queries.length; i++) {
    const pair = queries[i].split('=')
    params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '')
  }
  return params
}

// formatCurrency function
function formatCurrency(num) {
  return '$' + num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}

// truncateText function
function truncateText(str, maxLength) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength - 3) + '...'
  } else {
    return str
  }
}
