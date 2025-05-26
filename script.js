fetch('rules.json')
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById('rules-list');
    data.forEach((rule, index) => {
      const li = document.createElement('li');
      li.textContent = rule;
      list.appendChild(li);
    });
  })
  .catch(err => {
    console.error("Failed to load rules:", err);
  });
