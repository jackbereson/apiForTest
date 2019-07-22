const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = require("../1.models/user");
const Category = require("../1.models/category");
const Community = require("../1.models/community");
const Member = require("../1.models/member");
const Channel = require("../1.models/channel");
const Post = require("../1.models/post");

function connectDb() {
  console.log(" ===> Connect DB");
  const conn = `mongodb://${process.env.MONGO_HOST}/${
    process.env.MONGO_DATABASE
  }?replicaSet=Cluster0-shard-0`;

  mongoose
    .connect(conn, {
      useNewUrlParser: true,
      keepAlive: 1,
      reconnectTries: Number.MAX_VALUE,
      w: "majority",
      wtimeout: 10000,
      ssl: true,
      auth: { authSource: "admin" },
      user: process.env.MONGO_USER,
      pass: process.env.MONGO_PASSWORD
      // server: { poolSize: 5 },
      //  replset: {rs_name: 'Cluster0-shard-0'},
    })
    .catch(err => {
      console.log(err);
    });
}

async function addUsers() {
  console.log(addUsers.name, " => ");
  await User.deleteMany({}, (err) => {
    if (err) throw err;
  });
  const emails = [
    "aa",
    "bb",
    "cc",
    "dd",
    "ff",
    "ee",
    "gg",
    "hh",
    "ss",
    "zz",
    "xx",
    "oo",
    "tt",
    "qq",
    "ww",
    "rr",
    "tt",
    "yy",
    "uu",
    "ii"
  ];
  for (let i = 0; i < emails.length; i++) {
    let email = `${emails[i]}@gmail.com`;
    let password = "123456";
    await User.create({
      email: email,
      password: await bcrypt.hash(password, 12)
    });
    console.log(addUsers.name, " : ", email);
  }
  console.log("--------------------------------------------------------------");
}

async function addCategories() {
  console.log("Add category =>");
  await Category.deleteMany({}, (err) => {
    if (err) throw err;
  });
  let res = await Category.create({
    code: "TOP",
    title: "Top communities",
    description: "Top communities",
    status: "on" //on off del appr
  });
  console.log("Inserted category :", res._doc.title);

  res = await Category.create({
    code: "DES",
    title: "Design",
    description: "Design",
    status: "on" //on off del appr
  });
  console.log("Inserted category :", res._doc.title);

  res = await Category.create({
    code: "WEBDEV",
    title: "Web development",
    description: "Web development",
    status: "on" //on off del appr
  });
  console.log("Inserted category :", res._doc.title);

  res = await Category.create({
    code: "TECH",
    title: "Tech",
    description: "Tech",
    status: "on" //on off del appr
  });
  console.log("Inserted category :", res._doc.title);

  res = await Category.create({
    code: "LIFE",
    title: "Life",
    description: "Life",
    status: "on" //on off del appr
  });
  console.log("Inserted category :", res._doc.title);

  console.log("--------------------------------------------------------------");
}

async function getUsers() {
  //'aa','bb','cc','dd','ff','ee','gg','hh','ss','zz','xx','oo','tt','qq','ww','rr','tt','yy','uu','ii'
  const aa = await User.findOne({ email: "aa@gmail.com" }).lean();
  const bb = await User.findOne({ email: "bb@gmail.com" }).lean();
  const cc = await User.findOne({ email: "cc@gmail.com" }).lean();
  const dd = await User.findOne({ email: "dd@gmail.com" }).lean();
  const ff = await User.findOne({ email: "ff@gmail.com" }).lean();
  const ee = await User.findOne({ email: "ee@gmail.com" }).lean();
  const gg = await User.findOne({ email: "gg@gmail.com" }).lean();
  const hh = await User.findOne({ email: "hh@gmail.com" }).lean();
  const ss = await User.findOne({ email: "ss@gmail.com" }).lean();
  const zz = await User.findOne({ email: "zz@gmail.com" }).lean();
  const xx = await User.findOne({ email: "xx@gmail.com" }).lean();
  const oo = await User.findOne({ email: "oo@gmail.com" }).lean();
  const tt = await User.findOne({ email: "tt@gmail.com" }).lean();
  const qq = await User.findOne({ email: "qq@gmail.com" }).lean();
  const ww = await User.findOne({ email: "ww@gmail.com" }).lean();
  const rr = await User.findOne({ email: "rr@gmail.com" }).lean();
  return { aa, bb, cc, dd, ff, ee, gg, hh, ss, zz, xx, oo, tt, qq, ww, rr };
}

async function addCommunity() {
  console.log(addCommunity.name, " =>");
  await Community.deleteMany({}, (err) => {
    if (err) throw err;
  });

  const { aa } = await getUsers();

  const TOP = await Category.findOne({ code: "TOP" }).lean();
  const DES = await Category.findOne({ code: "DES" }).lean();
  const WEBDEV = await Category.findOne({ code: "WEBDEV" }).lean();

  let res = await Community.create({
    title: "How-That Suport",
    alias: "how-that-suport",
    description:
      "How-That Suport is a community platform for the future. This community is a great place to ask questions, request features, report bugs, and chat with the How-That teams",
    url: "howthat.com",
    profilePhoto:'img/profile.jpg',
    coverPhoto:'img/cover.jpg',
    category: TOP,
    creator: aa,
    action: "read",
    status: "on" //on off del appr
  });
  console.log(addCommunity.name, " : ", res._doc.title);

  res = await Community.create({
    title: "Zeit",
    alias: "zeit",
    description:
      "Our mission is to make cloud computing as easy and accessible as mobile computing. You can find our Next.js community here.",
    url: "https://zeit.co",
    profilePhoto:'img/profile.jpg',
    coverPhoto:'img/cover.jpg',
    category: WEBDEV,
    creator: aa,
    action: "all",
    status: "on" //on off del appr
  });
  console.log(addCommunity.name, " : ", res._doc.title);

  res = await Community.create({
    title: "Codesandbox",
    alias: "codesandbox",
    description:
      "CodeSandbox is an online editor built for web applications, here you can talk about it or share your work!",
    url: "https://codesandbox.io",
    profilePhoto:'img/profile.jpg',
    coverPhoto:'img/cover.jpg',
    category: WEBDEV,
    creator: aa,
    action: "all",
    status: "on" //on off del appr
  });
  console.log(addCommunity.name, " : ", res._doc.title);

  res = await Community.create({
    title: "React",
    alias: "React",
    description:
      "A community of developers, designers and others who love React.js. ⚛️",
    url: "https://reactjs.org",
    profilePhoto:'img/profile.jpg',
    coverPhoto:'img/cover.jpg',
    category: WEBDEV,
    creator: aa,
    action: "all",
    status: "on" //on off del appr
  });
  console.log(addCommunity.name, " : ", res._doc.title);

  res = await Community.create({
    title: "Figma",
    alias: "figma",
    description:
      "Figma is the first collaborative UI design tool built in the browser. Join our growing community and kick off a conversation!",
    url: "www.figma.com",
    profilePhoto:'img/profile.jpg',
    coverPhoto:'img/cover.jpg',
    category: WEBDEV,
    creator: aa,
    action: "all",
    status: "on" //on off del appr
  });
  console.log(addCommunity.name, " : ", res._doc.title);

  console.log("--------------------------------------------------------------");
}

async function addChanel() {
  console.log(addChanel.name, " =>");

  await Channel.deleteMany({}, (err) => {
    if (err) throw err;
  });

  const { aa, bb, cc } = await getUsers();

  const howthat = await Community.findOne({ alias: "how-that-suport" }).lean();

  let res = await Channel.create({
    title: "General",
    creator: aa,
    community: howthat,
    status: "on"
  });
  console.log(addChanel.name, " : ", res._doc.title);

  res = await Channel.create({
    title: "Suport",
    creator: bb,
    community: howthat,
    status: "on"
  });
  console.log(addChanel.name, " : ", res._doc.title);

  res = await Channel.create({
    title: "News",
    creator: cc,
    community: howthat,
    status: "on"
  });
  console.log(addChanel.name, " : ", res._doc.title);

  console.log("--------------------------------------------------------------");
}

async function addMember() {
  console.log(addMember.name, " =>");
  await Member.deleteMany({}, (err) => {
    if (err) throw err;
  });
  const {
    aa,
    bb,
    cc,
    dd,
    ff,
    ee,
    gg,
    hh,
    ss,
    zz,
    xx,
    oo,
    tt,
    qq,
    ww,
    rr
  } = await getUsers();
  const users = [
    aa,
    bb,
    cc,
    dd,
    ff,
    ee,
    gg,
    hh,
    ss,
    zz,
    xx,
    oo,
    tt,
    qq,
    ww,
    rr
  ];

  const howthat = await Community.findOne({ alias: "how-that-suport" }).lean();
  let channels = await Channel.find({ community: howthat }).lean();
  channels = channels.map(c => {
    return {
      channel: c._id,
      setting: "notice" // notice - mute
    };
  });

  for (let i = 0; i < users.length; i++) {
    // normal - team - blocked
    let status = users[i].email.includes('aa') || users[i].email.includes('bb') || users[i].email.includes('cc') ? "team" : "normal";

    const res = await Member.create({
      comunity: howthat,
      user: users[i],
      channels: channels,
      status: status
    });
    console.log(addMember.name," : ", res._doc.user);
  }

  console.log("--------------------------------------------------------------");
}


async function createPosts() {
  console.log(createPosts.name, " =>");
  await Post.deleteMany({}, (err) => {
    if (err) throw err;
  });
  const {
    aa,
    bb,
    cc,
    dd,
    ff,
    ee,
    gg,
    hh,
    ss,
    zz,
    xx,
    oo,
    tt,
    qq,
    ww,
    rr
  } = await getUsers();
  const users = [
    aa,
    bb,
    cc,
    dd,
    ff,
    ee,
    gg,
    hh,
    ss,
    zz,
    xx,
    oo,
    tt,
    qq,
    ww,
    rr
  ];

  const howthat = await Community.findOne({ alias: "how-that-suport" }).lean();
  const channels = await Channel.find({ community: howthat._id }).lean();
  // console.log("channels", channels);
  for (let i = 0; i < users.length; i++) {
    console.log(users[i].email, "posts : ");
    for (let j = 0; j < channels.length; j++) {
      // const test = `${users[i].email} - ${channels[j].title} - How to install packages that aren't on npm?`;
      const res = await Post.create({
        title: `${users[i].email} - ${channels[j].title} - How to install packages that aren't on npm?`,
        exceprt: `Hi all - I've been struggling for a while now trying to install nodejs packages which aren't on npm. In my package.json, this syntax works fine on non-serverless deployments...`,
        content: `<div class="markdown"><p class="style__Paragraph-hbwp71-18 ioJKJG">Hi all - I've been struggling for a while now trying to install nodejs packages which aren't on npm. In my package.json, this syntax works fine on non-serverless deployments:</p><pre class="prism-code language-json style__Line-hbwp71-17 hEkGzJ"><div class="token-line"><span class="token property">"@nbbj/package-internal"</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">"file:packages/nbbj-package-internal-2.5.1.tgz"</span><span class="token plain">.</span></div></pre><p class="style__Paragraph-hbwp71-18 ioJKJG">However I can't get that pattern to work on Now. I've also tried installing from private GitHub repositories with no success - it works just fine in all other deployments, but trying to do it in Now serverless and it can't find the file/package - even when equipped with the right access keys.</p><p class="style__Paragraph-hbwp71-18 ioJKJG">Any ideas how I can include a private package to be used during the build would be very helpful. We're trying to reduce monthly recurring costs, so we are being pushed away from being able to do private npm packages.</p></div>`,
        status: 'on',
        postType: 'doc',
        commentStatus: 'on',
        creator: users[i],
        channel: channels[j],
        comunity: howthat,
      });
      console.log(createPosts.name, " : ", res._doc.title);
    }
  }

  console.log("--------------------------------------------------------------");
}

//===============================================================================================================================================================

connectDb();
(async () => {
  await addUsers();
  await addCategories();
  await addCommunity();
  await addChanel();
  await addMember();
  await createPosts();

  console.log("end ...");
  process.exit(0);
})();
