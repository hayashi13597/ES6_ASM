const getHtml = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      const menu = data
        .map((item) => {
          return `<tr>
          <th scope="row">${item.id}</th>
          <td>${item.name}</td>
          <td>${item.username}</td>
          <td>${item.email}</td>
          <td>${item.phone}</td>
          <td>${item.website}</td>
          <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="show(${item.id})">
            Work information
            </button>
            <!-- Modal -->
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Work information
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Work name</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody id="user-data"></tbody>
                    </table>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>`;
        })
        .join("");
      document.getElementById("root").innerHTML = menu;
    });
};

export default getHtml;
