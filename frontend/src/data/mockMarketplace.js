const svg = (kind) => {
  const drawings = {
    phone: `
      <rect x="76" y="18" width="128" height="244" rx="25" fill="#171827"/>
      <rect x="86" y="35" width="108" height="208" rx="16" fill="url(#g)"/>
      <circle cx="111" cy="55" r="7" fill="#171827"/>
      <circle cx="130" cy="55" r="7" fill="#171827"/>
      <path
        d="M103 183c27-42 55-42 82 0"
        fill="none"
        stroke="#fff"
        stroke-width="8"
        stroke-linecap="round"
        opacity=".8"
      />
    `,

    laptop: `
      <rect x="48" y="42" width="184" height="142" rx="12" fill="#d9dbe5"/>
      <rect x="59" y="53" width="162" height="120" rx="6" fill="url(#g)"/>
      <path d="M27 196h226l-20 29H47z" fill="#aeb1bd"/>
      <rect x="112" y="204" width="56" height="7" rx="3.5" fill="#747887"/>
    `,

    headphones: `
      <path
        d="M65 155V118a75 75 0 0 1 150 0v37"
        fill="none"
        stroke="#262838"
        stroke-width="27"
        stroke-linecap="round"
      />

      <rect
        x="42"
        y="139"
        width="53"
        height="82"
        rx="23"
        fill="#171827"
      />

      <rect
        x="185"
        y="139"
        width="53"
        height="82"
        rx="23"
        fill="#171827"
      />

      <path
        d="M72 156v47M208 156v47"
        stroke="#8f52ee"
        stroke-width="8"
        stroke-linecap="round"
      />
    `,

    watch: `
      <rect
        x="112"
        y="18"
        width="56"
        height="54"
        rx="20"
        fill="#30313e"
      />

      <rect
        x="82"
        y="54"
        width="116"
        height="164"
        rx="38"
        fill="#171827"
      />

      <rect
        x="96"
        y="68"
        width="88"
        height="136"
        rx="28"
        fill="url(#g)"
      />

      <rect
        x="112"
        y="214"
        width="56"
        height="54"
        rx="20"
        fill="#30313e"
      />

      <circle
        cx="140"
        cy="136"
        r="30"
        fill="none"
        stroke="#fff"
        stroke-width="6"
        opacity=".8"
      />

      <path
        d="M140 136V116M140 136l17 10"
        stroke="#fff"
        stroke-width="5"
        stroke-linecap="round"
      />
    `,
  };

  const drawing = drawings[kind];

  return `data:image/svg+xml,${encodeURIComponent(`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 280 280"
    >
      <defs>
        <linearGradient
          id="g"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop stop-color="#7b35ee"/>
          <stop offset="1" stop-color="#c7a4ff"/>
        </linearGradient>
      </defs>

      <rect
        width="280"
        height="280"
        rx="32"
        fill="#f5f1ff"
      />

      ${drawing}
    </svg>
  `)}`;
};

export const mockProducts = [
  {
    id: "iphone-15",
    name: "iPhone 15",
    category: "Electronics",
    price: 69999,
    image: svg("phone"),
    shortDescription:
      "A16 Bionic chip, 48MP camera and USB-C.",

    variants: [
      {
        id: "128",
        label: "128 GB",
      },
      {
        id: "256",
        label: "256 GB",
      },
      {
        id: "512",
        label: "512 GB",
      },
    ],

    emiPlans: [
      {
        id: "6",
        months: 6,
        monthlyAmount: 11667,
        interestRate: 0,
        badge: "No-cost EMI",
      },
      {
        id: "12",
        months: 12,
        monthlyAmount: 5833,
        interestRate: 0,
        badge: "No-cost EMI",
      },
    ],
  },

  {
    id: "macbook-air",
    name: "MacBook Air",
    category: "Electronics",
    price: 99900,
    image: svg("laptop"),
    shortDescription:
      "Lightweight performance with an M-series chip.",

    variants: [
      {
        id: "8-256",
        label: "8GB / 256GB",
      },
      {
        id: "16-512",
        label: "16GB / 512GB",
      },
    ],

    emiPlans: [
      {
        id: "6",
        months: 6,
        monthlyAmount: 16650,
        interestRate: 0,
        badge: "No-cost EMI",
      },
      {
        id: "12",
        months: 12,
        monthlyAmount: 8325,
        interestRate: 0,
        badge: "No-cost EMI",
      },
    ],
  },

  {
    id: "sony-headphones",
    name: "Sony WH-1000XM5",
    category: "Audio",
    price: 29990,
    image: svg("headphones"),
    shortDescription:
      "Premium noise-cancelling wireless headphones.",

    variants: [
      {
        id: "black",
        label: "Black",
      },
      {
        id: "silver",
        label: "Silver",
      },
    ],

    emiPlans: [
      {
        id: "3",
        months: 3,
        monthlyAmount: 9997,
        interestRate: 0,
        badge: "No-cost EMI",
      },
      {
        id: "6",
        months: 6,
        monthlyAmount: 4998,
        interestRate: 0,
        badge: "No-cost EMI",
      },
    ],
  },

  {
    id: "galaxy-watch",
    name: "Galaxy Watch",
    category: "Wearables",
    price: 24999,
    image: svg("watch"),
    shortDescription:
      "Smart health and fitness tracking on your wrist.",

    variants: [
      {
        id: "40",
        label: "40mm",
      },
      {
        id: "44",
        label: "44mm",
      },
    ],

    emiPlans: [
      {
        id: "3",
        months: 3,
        monthlyAmount: 8333,
        interestRate: 0,
        badge: "No-cost EMI",
      },
      {
        id: "6",
        months: 6,
        monthlyAmount: 4167,
        interestRate: 0,
        badge: "No-cost EMI",
      },
    ],
  },
];