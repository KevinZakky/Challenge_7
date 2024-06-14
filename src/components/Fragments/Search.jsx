const SearchContainer = () => {
  return (
    <section class="cari-mobil">
      <div class="container container-fluid">
        <div class="row">
          <div class="col my-auto">
            <label for="tipedriver">Tipe Driver</label>
            <select name="tipedriver" id="driver-type">
              <option disabled selected>
                Pilih Tipe Driver
              </option>
              <option value="1">Dengan Sopir</option>
              <option value="2">Tanpa Sopir (Lepas Kunci)</option>
            </select>
          </div>
          <div class="col my-auto">
            <label for="tanggal">Tanggal</label> <br />
            <input
              type="date"
              id="date"
              name="tanggal"
              placeholder="Pilih Tanggal"
            />
          </div>
          <div class="col my-auto">
            <label for="waktujemput">Waktu Jemput/Ambil</label> <br />
            <input
              type="time"
              id="pickup-time"
              name="waktu"
              placeholder="Pilih Waktu"
            />
          </div>
          <div class="col my-auto">
            <label for="jumlahpenumpang">Jumlah Penumpang (opsional)</label>{" "}
            <br />
            <input
              type="text"
              id="passenger-count"
              name="jumlahpenumpang"
              placeholder="Jumlah Penumpang"
            />
          </div>
          <button
            type="button"
            class="btn btn-cari-mobil"
            id="filter-car-button"
            style={{ color: "#fff", backgroundColor: "#5cb85f" }}
          >
            Cari Mobil
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchContainer;
