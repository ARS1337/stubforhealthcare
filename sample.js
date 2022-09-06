const Sample = {
  users:[
    {user:'mypcot@gmail.in',password:'12345678'}
  ],
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
          banner_image:
            "https://placehold.jp/1200x800.png",
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
          banner_image:
            "https://placehold.jp/1200x800.png",
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
          banner_image:
            "https://placehold.jp/1200x800.png",
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
      reset_password_link: "http://clear-moments-float-106-201-76-55.loca.lt/webadmin/forgot-password?c=1",
    },
  },
  changePasswordFail:{
    success: "0",
    message: "Invalid credentials",
  },
  forgotPasswordSuccess: {
    success: "1",
    message: "We have redirected you to reset password page.",
    data: {
      reset_password_link: "http://clear-moments-float-106-201-76-55.loca.lt/webadmin/forgot-password?c=1",
    },
  },
};

module.exports = Sample;
