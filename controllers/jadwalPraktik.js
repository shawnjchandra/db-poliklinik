import * as jadwalPraktikService from "../services/jadwalPraktik.js";
import * as pegawaiService from "../services/pegawai.js";

export const createJadwalPraktik = async (req, res) => {
  const jadwalPraktik = await jadwalPraktikService.createJadwalPraktik(
    req.body
  );
  return res.json(jadwalPraktik);
};

export const getAllJadwalPraktik = async (req, res) => {
  const jadwalPraktik = await jadwalPraktikService.getAllJadwalPraktik();
  return res.json(jadwalPraktik);
};

export const getJadwalPraktik = async (req, res) => {
  const { id_pegawai } = req.params;

  const jadwalPraktik = await jadwalPraktikService.getJadwalPraktik(id_pegawai);
  const dokter = await pegawaiService.getDokterById(id_pegawai);
  return res.json({ ...dokter, jadwal_praktik: jadwalPraktik });
};

export const deleteJadwalPraktik = async (req, res) => {
  const { id_jadwal } = req.params;

  await jadwalPraktikService.deleteJadwalPraktik(id_jadwal);

  return res.json({ success: true });
};
