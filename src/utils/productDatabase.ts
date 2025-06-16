
export interface Product {
  name: string;
  brand: string;
  price: number;
  category: string;
  specs: string[];
  rating?: number;
}

export const productDatabase: Product[] = [
  // Mouses
  {
    name: "G203 LIGHTSYNC",
    brand: "Logitech",
    price: 149.90,
    category: "mouse",
    specs: ["8000 DPI", "RGB LIGHTSYNC", "6 botões programáveis", "Cabo de 2,1m"],
    rating: 4.5
  },
  {
    name: "DeathAdder V3",
    brand: "Razer",
    price: 399.90,
    category: "mouse",
    specs: ["30000 DPI", "Sensor Focus Pro", "8 botões programáveis", "Ergonômico"],
    rating: 4.7
  },
  {
    name: "Viper Mini",
    brand: "Razer",
    price: 199.90,
    category: "mouse",
    specs: ["8500 DPI", "Ultralight 61g", "6 botões", "Ambidestro"],
    rating: 4.4
  },

  // Teclados
  {
    name: "K120",
    brand: "Logitech",
    price: 89.90,
    category: "keyboard",
    specs: ["Teclado de membrana", "Resistente a respingos", "Layout ABNT2", "Teclas silenciosas"],
    rating: 4.2
  },
  {
    name: "G413",
    brand: "Logitech",
    price: 349.90,
    category: "keyboard",
    specs: ["Switches mecânicos Romer-G", "Backlight branco", "USB passthrough", "Estrutura de alumínio"],
    rating: 4.6
  },
  {
    name: "BlackWidow V3",
    brand: "Razer",
    price: 599.90,
    category: "keyboard",
    specs: ["Switches Green", "RGB Chroma", "Apoio para pulso", "Teclas macro dedicadas"],
    rating: 4.8
  },

  // Fones com fio
  {
    name: "SteelSeries Arctis 1",
    brand: "SteelSeries",
    price: 299.90,
    category: "wiredHeadphones",
    specs: ["Drivers 40mm", "Microfone destacável", "Compatível com múltiplas plataformas", "Headband ajustável"],
    rating: 4.3
  },
  {
    name: "HyperX Cloud Stinger",
    brand: "HyperX",
    price: 249.90,
    category: "wiredHeadphones",
    specs: ["Drivers 50mm", "Peso 275g", "Microfone rotativo", "Controles no cabo"],
    rating: 4.4
  },

  // Fones sem fio
  {
    name: "G733 LIGHTSPEED",
    brand: "Logitech",
    price: 899.90,
    category: "wirelessHeadphones",
    specs: ["Wireless 2.4GHz", "RGB LIGHTSYNC", "Autonomia 29h", "Microfone Blue VO!CE"],
    rating: 4.5
  },
  {
    name: "Arctis 7P",
    brand: "SteelSeries",
    price: 1299.90,
    category: "wirelessHeadphones",
    specs: ["Wireless 2.4GHz", "Autonomia 24h", "Microfone retrátil", "Controles no fone"],
    rating: 4.6
  },

  // Microfones de lapela
  {
    name: "LavaLier GO",
    brand: "Rode",
    price: 299.90,
    category: "microphoneLapel",
    specs: ["Omnidirecional", "Conector 3.5mm", "Clipe incluído", "Cabo 1.2m"],
    rating: 4.7
  },
  {
    name: "SmartLav+",
    brand: "Rode",
    price: 389.90,
    category: "microphoneLapel",
    specs: ["Para smartphones", "Conector TRRS", "Resposta 20Hz-20kHz", "Clipe de metal"],
    rating: 4.5
  },

  // Microfones dedicados
  {
    name: "Blue Yeti",
    brand: "Blue",
    price: 1299.90,
    category: "microphoneDedicated",
    specs: ["USB", "4 padrões polares", "Monitoramento zero-latency", "Controles de volume"],
    rating: 4.8
  },
  {
    name: "Audio-Technica AT2020USB+",
    brand: "Audio-Technica",
    price: 999.90,
    category: "microphoneDedicated",
    specs: ["Condensador", "USB/XLR", "Resposta 20Hz-20kHz", "Padrão cardioide"],
    rating: 4.6
  },

  // Monitores
  {
    name: "24G2",
    brand: "AOC",
    price: 899.90,
    category: "monitor",
    specs: ["24\" Full HD", "IPS 144Hz", "1ms", "FreeSync", "Bordas ultrafinas"],
    rating: 4.4
  },
  {
    name: "VG248QE",
    brand: "ASUS",
    price: 1299.90,
    category: "monitor",
    specs: ["24\" Full HD", "TN 144Hz", "1ms", "G-SYNC Compatible", "Ergonômico"],
    rating: 4.3
  },
  {
    name: "27GL850",
    brand: "LG",
    price: 2299.90,
    category: "monitor",
    specs: ["27\" QHD", "Nano IPS 144Hz", "1ms", "HDR10", "G-SYNC Compatible"],
    rating: 4.7
  },

  // Mousepads
  {
    name: "QcK",
    brand: "SteelSeries",
    price: 89.90,
    category: "mousepad",
    specs: ["320x270mm", "Superfície de tecido", "Base de borracha", "3mm espessura"],
    rating: 4.5
  },
  {
    name: "MM300",
    brand: "Corsair",
    price: 129.90,
    category: "mousepad",
    specs: ["360x300mm", "Superfície de tecido", "Base antiderrapante", "Bordas costuradas"],
    rating: 4.4
  },

  // Webcams
  {
    name: "C270",
    brand: "Logitech",
    price: 189.90,
    category: "webcam",
    specs: ["720p HD", "Microfone integrado", "Correção automática de luz", "Clipe universal"],
    rating: 4.2
  },
  {
    name: "C920",
    brand: "Logitech",
    price: 499.90,
    category: "webcam",
    specs: ["1080p Full HD", "Duplo microfone estéreo", "Autofoco", "Compressão H.264"],
    rating: 4.6
  },
  {
    name: "C922 Pro Stream",
    brand: "Logitech",
    price: 699.90,
    category: "webcam",
    specs: ["1080p 30fps", "720p 60fps", "Background replacement", "Microfone estéreo"],
    rating: 4.7
  }
];
