const Sample = {
  users: [{ user: "mypcot@gmail.in", password: "12345678" }],
  loginSuccess: {
    success: "1",
    message: "Logged in successfully!",
    data: {
      id: 42,
      name: "mypcot",
      email: "mypcot@gmail.in",
      country_id: 1,
      phone: "9090909090",
      language_id: 1,
      currency_id: 1,
      remember_token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9tYWpvci1zaHJpbXBzLXJlbGF0ZS0xMTAtMjI3LTIyMy0xMi5sb2NhLmx0XC9jdXN0b21lcmFwaVwvbG9naW5fYXBpIiwiaWF0IjoxNjYyMzc0MzQxLCJleHAiOjE2NzgwOTkxNDEsIm5iZiI6MTY2MjM3NDM0MSwianRpIjoidVhUTGs1cnFMRVlvTDRZdSIsInN1YiI6NDIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ._RzrlirkhzWXSYyZOoDBret8QGpLtTwREatVdV4nDfk",
      status: "1",
      approval_status: "accepted",
      last_login: "2022-09-05T10:39:01.697436Z",
      currency: {
        id: 1,
        currency_name: "Indian Rupee",
        currency_symbol: "₹",
        currency_code: "INR",
      },
      country: {
        id: 1,
        phone_code: "91",
        country_name: "India",
      },
    },
  },
  loginFailed: {
    success: "0",
    message: "Invalid login credentials",
  },
  bannerSuccess: {
    success: "1",
    message: "Data Fetched Successfully",
    data: {
      result: [
        {
          id: 1,
          title: "Banner",
          banner_image: "https://placehold.jp/1200x800.png",
          banner_thumb_image:
            "http://skyonliners.com/demo/yaduz/storage/app/public/uploads/banner/thumb/banner_thumb_1.jpg?d=1662459423",
          seo_url: "banner",
          meta_title: null,
          meta_description: null,
          meta_keyword: null,
        },
        {
          id: 2,
          title: "Banner 2",
          banner_image: "https://placehold.jp/1200x800.png",
          banner_thumb_image:
            "http://skyonliners.com/demo/yaduz/storage/app/public/uploads/banner/thumb/banner_thumb_1.jpg?d=1662459423",
          seo_url: "banner-2",
          meta_title: null,
          meta_description: null,
          meta_keyword: null,
        },
        {
          id: 3,
          title: "Banner 3",
          banner_image: "https://placehold.jp/1200x800.png",
          banner_thumb_image:
            "http://skyonliners.com/demo/yaduz/storage/app/public/uploads/banner/thumb/banner_thumb_1.jpg?d=1662459423",
          seo_url: "banner-3",
          meta_title: null,
          meta_description: null,
          meta_keyword: null,
        },
      ],
      total_records: 3,
    },
  },
  bannerFail: {
    success: "0",
    message: "Invalid  params",
  },
  forgotPasswordFail: {
    success: "0",
    message: "Invalid  params",
  },
  forgotPasswordSuccess: {
    success: "1",
    message: "We have redirected you to reset password page.",
    data: {
      reset_password_link:
        "http://clear-moments-float-106-201-76-55.loca.lt/webadmin/forgot-password?c=1",
    },
  },
  changePasswordFail: {
    success: "0",
    message: "Invalid credentials",
  },
  forgotPasswordSuccess: {
    success: "1",
    message: "We have redirected you to reset password page.",
    data: {
      reset_password_link:
        "http://clear-moments-float-106-201-76-55.loca.lt/webadmin/forgot-password?c=1",
    },
  },
  stateList: {
    success: "1",
    message: "Data Fetched Successfully",
    data: {
      result: [
        {
          id: 1,
          state_name: "Andaman & Nicobar",
          country_name: "India",
        },
        {
          id: 2,
          state_name: "Arunachal Pradesh",
          country_name: "India",
        },
        {
          id: 3,
          state_name: "Assam",
          country_name: "India",
        },
        {
          id: 4,
          state_name: "Bihar",
          country_name: "India",
        },
        {
          id: 5,
          state_name: "Chandigarh",
          country_name: "India",
        },
        {
          id: 6,
          state_name: "Chhattisgarh",
          country_name: "India",
        },
        {
          id: 7,
          state_name: "Dadra & Nagar Haveli",
          country_name: "India",
        },
        {
          id: 8,
          state_name: "Daman & Diu",
          country_name: "India",
        },
        {
          id: 9,
          state_name: "Delhi",
          country_name: "India",
        },
        {
          id: 10,
          state_name: "Goa",
          country_name: "India",
        },
      ],
      total_records: 10,
    },
  },
  countryList: {
    success: "1",
    message: "Data Fetched Successfully",
    data: {
      result: [
        {
          id: 1,
          country_name: "India",
          phone_code: "91",
          phone_length: "10",
          currency_name: "Indian Rupee",
          currency_symbol: "₹",
          currency_code: "INR",
        },
        {
          id: 2,
          country_name: "Russia",
          phone_code: "81",
          phone_length: "10",
          currency_name: "Russian Rouble",
          currency_symbol: "₽",
          currency_code: "RUB",
        },
      ],
      total_records: 1,
    },
  },
  roles:{
    success: "1",
    message: "Data Fetched Successfully",
    data: {
      result:[
        {
          id: 1,
          role_name: "Admin",
        },
        {
          id: 2,
          role_name: "Accountant",
        },
        {
          id: 3,
          role_name: "Manager",
        },
        {
          id: 4,
          role_name: "Dispatcher",
        },
      ]
    }
  }
};

module.exports = Sample;
