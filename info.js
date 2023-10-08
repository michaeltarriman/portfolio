let info = {
  name: "Michael Tarriman",
  logo_name: "Michael Tarriman",
  flat_picture: require("./src/assets/me.jpg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "Hi! I'm Michael Tarriman graduated with Bachelor's in Information Technology. A System Administrator with 3+ experience with System Administration specialize in Linux and Microsoft Ecosystem and Networking, with 2+ experience in DevOps culture and 1+ experience in Cyber Security",
  links: {
    linkedin: "https://www.linkedin.com/in/michaeltarriman/",
    github: "https://github.com/michaeltarriman",
    resume: "https://drive.google.com/file/d/1TCvXaHxGJaNZMVK-XE4GQXtkRCF_lw-t/view?usp=sharing",
  },
  education: [
    {
      name: "Dela Salle University -  Philippines",
      place: "Dasmariñas Cavite",
      date: "2016 - 2019",
      degree: "Bachelor in Information Technology",
      description:
        "",
      skills: [
        "System Administration",
        "OSI 7 Layers Networking",
        "HTML,CSS,JS and Database programming",      ]
    },
  ],
  experience: [
    {
      name: "Oost&Voort Inc.",
      place: "Muntinlupa Philippines",
      date: "May 2021 - Present",
      position: "System Administrator / DevOps",
      description:
        "Collaborate and support multiple developers from internal and external, Collaborate and support multiple developers from internal and external",
      skills: ["Docker", "Kubernetes", "CICD", "Monitoring", "Linux Administration", "Servers and Containers Hardening", "InfoSec"]
    },
    {
      name: "Outwit Inc",
      place: "Makati Philippines",
      date: "Sep 2020 - March 2021",
      position: "Linux System Administrator",
      description:
        "Daily Server Administration, routinely assisting with their data center maintenance, support internal developers with their deployments, and assist with internal hardware related problem",
      skills: ["Server Administration", "Dev Support", "Server Hardware Support", "Data Center Support"]
    },
    {
      name: "Leekie Enterprises",
      place: "Makati Philippines",
      date: "July, 2019 - July, 2020",
      position: "Junior System Administrator",
      description: "Assist our internal users with their technical problems, research and quote for any hardware procurement, web Server and database server troubleshooting",
      skills: ["Web Server", "DB Server", "Hardware", "Tech support"]
    },
    {
      name: "Taishan Insurance Brokers Ltd.",
      place: "Makati Philippines",
      date: "Jun 2016 - Jan 2017",
      position: "IT Administrator",
      description: "",
      skills: ["Tech support", "Hardware"]
    },
  ],
  skills: [
    {
      title: "DevOps",
      info: 
        ["Docker", "Kubernetes", "IaC", "Cloud Technology", "CICD"],
      icon: "fa fa-pencil-square-o"
    },
    {
      title: "System Administration",
      info: [
        "Web Server","Database Server","Backup Server","Email Server","Networking"],
      icon: "fa fa-code"
    },
    {
      title: "Security",
      info: [
        "Penetrating Testing","OWASP","Security Awareness Training"],
      icon: "fa fa-cubes"
    },
    {
      title: "Programming",
      info: ["Javascript", "SQL", "Bash Script"],
      icon: "fas fa-laptop-code"
    },
  ],
  portfolio_design: [
    {
      name: "AWS Certified Sysops Administrator Associate",
      title: "AWS Certified Sysops Administrator Associate",
      pictures: [
        {
          img: require("./src/assets/designs/AWS/sysops.png"),
          title: "AWS Certified Sysops Administrator Associate"
        },
      ],
      technologies: ["Networking", "CloudWatch", "CloudTrail", "WAF"],
      category: "",
      date: "Dec, 2022",
      visit: "https://www.credly.com/badges/6b90b46c-d7e5-4f05-a264-68ff7871f925/public_url",
      description:
        ""
    },
    {
      name: "AWS Certified Developer – Associate",
      title: "AWS Certified Developer – Associate",
      pictures: [
        {
          img: require("./src/assets/designs/AWS/developer.png"),
          title: "AWS Certified Developer – Associate"
        },

      ],
      technologies: ["Beanstalk", "Fargate", "Serverless", "CloudFormation"],
      category: "",
      date: "Oct, 2022",
      visit: "https://www.credly.com/badges/d9462b58-8e06-4212-ae18-fcd106887470/public_url",
      description:
        ""
    },
    {
      name: "AWS Certified Solutions Architect – Associate",
      title: "AWS Certified Solutions Architect – Associate",
      pictures: [
        {
          img: require("./src/assets/designs/AWS/sa.png"),
          title: "AWS Certified Solutions Architect – Associate"
        },
      ],
      technologies: ["EC2", "RDS", "VPC", "Subnet", "Security Group", "IAM"],
      category:  "Badge: https://www.credly.com/badges/1e6cce1d-aad9-4790-a7d9-f570f530955b/public_url",
      date: "Aug, 2022",
      visit: "",
      description:
        ""
    },
    {
      name: "AWS Certified Cloud Practitioner",
      title: "AWS Certified Cloud Practitioner",
      pictures: [
        {
          img: require("./src/assets/designs/AWS/cloudprac.png"),
          title: "AWS Certified Cloud Practitioner"
        },
      ],
      technologies: ["Billing", "AWS Calculator", "Cost Explorer", "Organizational Unit", "Security Group"],
      category: "Badge: https://www.credly.com/badges/fef71638-d3c8-4db3-a652-22d012a2b5ab/public_url", 
      date: "July, 2022",
      visit: "",
      description:
        ""
    },
  ],
  portfolio: [
    {
      name: "Certified Ethical Hacker",
      pictures: [
        {
          img: require("./src/assets/designs/security/ceh.png")
        },
      ],
      technologies: ["Penetration Testing", "Ethical Hacking","IDS", "IPS", "Social Engineering"],
      category: "Web App",
      date: "May, 2023",
      visit: "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=Tr+McVREKIeVHj4PzDBztWjbpF3Xawi9qUC++UhSjOk=",
      description:
        " "
    },
    {
      name: "Red Hat Certified System Administrator",
      pictures: [
        {
          img: require("./src/assets/designs/security/redhat.png")
        },
      ],
      technologies: ["Linux Basics", "System Configuration","Automating Tasks","System Maintenance", "Network Configuration", "Security Administration"],
      category: "",
      date: "March, 2020",
      visit: "https://rhtapps.redhat.com/certifications/badge/verify/3ICRAANFI5UCFW74GQZK4UCHUAAEQU3CUPSQX2KSDXT6RW46LQ3T7ULZ55KZZ56SKO7EQ3ETTLYZQ4U5NQYTCNA62RUWOCM34WWBUYQ=",
      description: ""
  },
    {
      name: "Certified Cisco Networking Administrator",
      pictures: [
        {
          img: require("./src/assets/designs/security/ccna.png")
        },
      ],
      technologies: ["Networking Fundamentals", "Routing and Switching", "Network Security", "Network Management"],
      category: "Badge: https://www.credly.com/badges/847adb87-cd19-4ee5-a29d-2b956e917897",
      date: "Feb, 2021",
      visit: "https://www.credly.com/badges/847adb87-cd19-4ee5-a29d-2b956e917897",
      description:
        ""
    },
  ],
};

export default info;
