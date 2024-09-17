import { ReservesInterface } from "../../interfaces/IReserve";

const apiUrl = "http://localhost:8000";

async function GetPayments(id: string) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  let res = await fetch(`${apiUrl}/payments/${id}`, requestOptions)
    .then((res) => {
      if (res.status == 200) {
        return res.json();
      } else {
        return false;
      }
    });

  return res;
}


async function GetPaymentById(id: Number | undefined) {
  const requestOptions = {
    method: "GET"
  };

  let res = await fetch(`${apiUrl}/payment/${id}`, requestOptions)
    .then((res) => {
      if (res.status == 200) {
        return res.json();
      } else {
        return false;
      }
    });

  return res;
}

async function GetPaymentByReserveDetailId(id: string | undefined) {
  const requestOptions = {
    method: "GET"
  };

  let res = await fetch(`${apiUrl}/paymentbyreserve_detail/${id}`, requestOptions)
    .then((res) => {
      if (res.status == 200) {
        return res.json();
      } else {
        return false;
      }
    });

  return res;
}


// async function CreatePayment(data: ReservesInterface) {
//   const requestOptions = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   };

//   let res = await fetch(`${apiUrl}/payments`, requestOptions)
//     .then((res) => {
//       if (res.status == 201) {
//         return res.json();
//       } else {
//         return false;
//       }
//     });

//   return res;
// }

// async function GetPaymentsByShopId(shopId: string | undefined) {
//   const requestOptions = {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   };

//   let res = await fetch(`${apiUrl}/payments/${shopId}`, requestOptions)
//     .then((res) => {
//       if (res.status == 200) {
//         return res.json();
//       } else {
//         return false;
//       }
//     });

//   return res;
// }


export {
  GetPayments,
  GetPaymentById,
  GetPaymentByReserveDetailId,
  // CreatePayment,
  // GetPaymentsByShopId,
};