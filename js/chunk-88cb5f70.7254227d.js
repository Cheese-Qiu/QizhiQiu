(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-88cb5f70"],{4929:function(i,n,e){"use strict";e.r(n);var a=function(){var i=this,n=i.$createElement,e=i._self._c||n;return e("div",{staticClass:"wrapper"},[i._l(i.students,(function(n,a){return e("div",{key:a,staticClass:"block"},[e("span",[i._v(i._s(n.type))]),e("div",{staticClass:"list"},i._l(n.list,(function(n){return e("div",{key:n.name,staticClass:"student",on:{click:function(e){return i.showDetail(n)}}},[e("el-image",{staticClass:"img",attrs:{src:n.img,fit:"cover",alt:""}}),e("div",{staticClass:"info"},[e("span",{staticClass:"name"},[i._v(i._s(n.name))]),e("p",[i._v(i._s(n.isCosupervised))]),e("p",[i._v("Admission Time: "+i._s(n.time))]),e("p",[i._v("Research Fields: "+i._s(n.research))]),e("p",[i._v("Interests: "+i._s(n.hobby))]),e("p",[i._v("Email: "+i._s(n.email))])])],1)})),0)])})),e("el-dialog",{attrs:{visible:i.showModal,width:"1000px",top:"10vh"},on:{"update:visible":function(n){i.showModal=n}}},[e("div",{staticClass:"detail"},[e("div",{staticClass:"left"},[e("img",{attrs:{src:i.currInfo.img,alt:""}}),e("div",{staticClass:"info"},[e("span",{staticClass:"name"},[i._v(i._s(i.currInfo.name))]),e("p",[i._v("Admission Time: "+i._s(i.currInfo.time))]),e("p",[i._v("Interests: "+i._s(i.currInfo.hobby))]),e("p",[i._v("Email: "+i._s(i.currInfo.email))])])]),e("div",{staticClass:"right"},[e("div",{staticClass:"item"},[e("h5",[i._v("Research Fields:")]),e("p",[i._v(" "+i._s(i.currInfo.research)+" ")])]),e("div",{staticClass:"item"},[e("h5",[i._v("Publications:")]),i._l(i.currInfo.papers,(function(n,a){return e("p",{key:a},[i._v(" "+i._s(n)+" ")])}))],2),e("div",{staticClass:"item"},[e("h5",[i._v("Honors:")]),i._l("string"===typeof i.currInfo.honors?[i.currInfo.honors]:i.currInfo.honors,(function(n,a){return e("p",{key:a},[i._v(" "+i._s(n)+" ")])}))],2)])])])],2)},o=[],t={data:function(){return{currInfo:{},showModal:!1,students:[{type:"PhD Students",list:[{name:"Xiaobo Zeng",isCosupervised:"(co-supervised with Prof. Weisheng Hu)",time:"2018",research:"Short-reach optical interconnections, optical wireless convergence",hobby:"Reading, running",img:"https://codimd.s3.shivering-isles.com/demo/uploads/upload_14d69f4b2062fb0f1e1fec6e91e36591.png",email:"xiaobozeng@sjtu.edu.cn",honors:"",papers:["[2] X. Zeng, H. Ren, M. Fu, L. Yi, W. Hu, and Q. Zhuge*, “Optical frequency comb-based cost-effective coherent transmission for intra-datacenter interconnections,” Optics Express, vol. 29, no. 11, pp. 17522-17533, 2021.","[1] Q. Zhuge*, X. Zeng, H. Lun, M. Cai, X. Liu, L. Yi, and W. Hu, “Application of machine learning in fiber nonlinearity modeling and monitoring for elastic optical networks,” IEEE/OSA Journal of Lightwave Technology, vol. 37, no. 13, pp. 3055-3063, 2019. (Invited paper)"]},{name:"Huazhi Lun",time:"2017.06",research:"Coherent optical communication, intelligent control",hobby:"",img:"",email:"huazhi.lun@sjtu.edu.cn",honors:["[2] First Prize of Outstanding Doctoral Students from State Key Laboratory of Advanced Optical Communication Systems and Networks.","[1] National Scholarship for Doctoral Students."],papers:["[15] H. Lun, X. Liu, M. Cai, Y. Zhang, R. Gao, W. Hu, L. Yi and Q. Zhuge*, “Machine-learning-based telemetry for monitoring long-haul optical transmission impairments: methodologies and challenges,” IEEE/OSA Journal of Optical Communications and Networking, vol. 13, no. 10, pp. E94-E108, 2021. (Invited paper)","[14] H. Lun, Y. Wu, M. Cai, X. Liu, R. Gao, M. Fu, L. Yi, W. Hu, and Q. Zhuge*, “ROADM-induced anomaly localization and evaluation for optical links based on receiver DSP and ML,” IEEE/OSA Journal of Lightwave Technology, vol. 39, no. 9, pp. 2696-2703, 2021.","[13] X. Liu, H. Lun, G. Ruo, M. Cai, L. Yi, W. Hu, and Q. Zhuge*, “A data-fusion-assisted telemetry layer for autonomous optical networks,” IEEE/OSA Journal of Lightwave Technology, 2021.","[12] H. Lun, X. Liu, M. Cai, Y. Wu, M. Fu, L. Yi, W. Hu, and Q. Zhuge*, “GAN based soft failure detection and identification for long-haul coherent transmission systems,” Optical Fiber Communications (OFC) Conference, Paper Th4J.2, 2021.","[11] H. Lun, M. Fu, X. Liu, Y. Wu, L. Yi, W. Hu, and Q. Zhuge*, “Soft failure identification for long-haul optical communication systems based on one-dimensional convolutional neural network,” IEEE/OSA Journal of Lightwave Technology, vol. 38, no. 11, pp. 2992-2999, 2020.","[10] Y. Wu, H. Lun, M. Fu, X. Zeng, X. Liu, Q. Liu, L. Yi, W. Hu, and Q. Zhuge*, “Degenerated look-up table-based perturbative fiber nonlinearity compensation algorithm for probabilistically shaped signals,” Optics Express, vol. 28, no. 9, pp. 13401-13413, 2020.","[9] X. Liu, H. Lun, M. Fu, Y. Fan, L. Yi, W. Hu and Q. Zhuge*, “AI-based modeling and monitoring techniques for future intelligent elastic optical networks,” Applied Sciences, vol. 10, no. 1, pp. 363-380, 2020. (Invited paper)","[8] X. Liu, H. Lun, M. Fu, Q. Qiu, L. Yi, W. Hu, and Q. Zhuge*, “A meta-learning-assisted training framework for application deployment to optical networks,” European Conference on Optical Communication (ECOC), Paper 74RJ9DPG49, 2020.","[7] M. Cai, H. Lun, M. Fu, X. Liu, L. Yi, W. Hu, and Q. Zhuge*, “Optical filtering impairment monitoring based on artificial neural network in coherent receiver,” Asia Communications and Photonics Conference (ACP), Paper T4B.6, 2020.","[6] M. Fu, H. Lun, Q. Liu, X. Liu, M. Cai, L. Yi, W. Hu, and Q. Zhuge*, “Investigation of CCDM implementation in long-haul subcarrier-multiplexing transmissions,” Signal Processing in Photonic Communications (SPPCom) Conference, Paper SpTh3I.5, 2020.","[5] H. Lun, X. Liu, M. Cai, M. Fu, Y. Wu, L. Yi, W. Hu, and Q. Zhuge*, “Anomaly localization in optical transmissions based on receiver DSP and artificial neural network,” Optical Fiber Communications (OFC) Conference, Paper W1K.4, 2020.","[4] X. Liu, H. Lun, M. Fu, Y. Fan, L. Yi, W. Hu, and Q. Zhuge*, “A three-stage framework for customizing link models for optical networks,” Optical Fiber Communications (OFC) Conference, Paper Th3D.6, 2020.","[3] X. Liu, H. Lun, M. Fu, L. Yi, W. Hu, and Q. Zhuge*, “Machine learning based fiber nonlinear noise monitoring for subcarrier-multiplexing systems,” Optical Fiber Communications (OFC) Conference, Paper M2J.6, 2020.","[2] H. Lun, Q. Zhuge*, Z. Xiao, S. Fu, M. Tang, D. Liu, W. Hu, and D. V. Plant, “Single-step digital backpropagation for subcarrier-multiplexing transmissions,” Optics Express, vol. 27, no. 25, pp. 36680-36690, 2019.","[1] H. Lun, Q. Zhuge*, M. Fu, Y. Wu, Q. Liu, M. Cai, X. Zeng, and W. Hu, “Soft failure identification in optical networks based on convolutional neural network,” European Conference on Optical Communication (ECOC), Paper P104, 2019.",""]},{name:"Meng Cai ",isCosupervised:"(co-supervised with Prof. Weisheng Hu)",time:"2017.06",research:"Intelligent optical network",hobby:"Climbing, taking part in any kind of activity",img:"https://codimd.s3.shivering-isles.com/demo/uploads/upload_6a6aafc012f69169bbb14a9c67f719f0.png",email:"caimeng0922@sjtu.edu.cn",honors:"Outstanding Party Member",papers:["[2] M. Cai, H. Lun, M. Fu, X. Liu, L. Yi, W. Hu, and Q. Zhuge*, “Optical filtering impairment monitoring based on artificial neural network in coherent receiver,” Asia Communications and Photonics Conference (ACP), Paper T4B.6, 2020.","[1] M. Cai, Q. Zhuge*, H. Lun, M. Fu, L. Yi, and W. Hu, “Pilot-aided self-phase modulation noise monitoring based on artificial neural network,” Asia Communications and Photonics Conference (ACP), Paper M4A.9, 2019."]},{name:"Qiaoya Liu",isCosupervised:"(co-supervised with Prof. Weisheng Hu)",time:"2018.09",research:"Coding and modulation, capacity optimization of optical systems",hobby:"Running, fitness, gourmet, travel, pets",img:"https://codimd.s3.shivering-isles.com/demo/uploads/upload_a9639d4dd01782d4f9642fa90c5513a9.jpg",email:"lqy18039@sjtu.edu.cn",honors:"Second Prize of Outstanding Doctoral Students from State Key Laboratory of Advanced Optical Communication Systems and Networks",papers:["[5] Q. Liu, M. Fu, H. Jiang, H. Ren, M. Cai, X. Zeng, H. Lun, L. Yi, W. Hu, and Q. Zhuge*, “Subcarrier-pairing entropy loading for subcarrier-multiplexing systems with colored-SNR distributions,” Optics Express, vol. 29, no. 18, pp. 28852-28863, 2021.","[4] M. Fu, Q. Liu, H. Lun, H. Jiang, Y. Wu, X. Liu, Z. Yang, L. Yi, W. Hu, and Q. Zhuge*, “Parallel bisection-based distribution matching for nonlinearity-tolerant probabilistic shaping in coherent optical communication systems,” IEEE/OSA Journal of Lightwave Technology, vol. 39, no. 20, pp. 6459-6469, 2021.","[3] M. Fu, Q. Liu, Y. Xu, H. Jiang, X. Zeng, Y. Wu, L. Yi, W. Hu, and Q. Zhuge*, “Multi-dimensional distribution matching with bit-level shaping for probabilistically shaped high order modulation formats,” IEEE/OSA Journal of Lightwave Technology, 2021.","[2] M. Fu, Q. Liu, X. Zeng, Y. Wu, L. Yi, W. Hu, and Q. Zhuge*, “Parallel bisection-based distribution matching for probabilistic shaping,” Optical Fiber Communications (OFC) Conference, Paper Th1G.2, 2020.","[1] M. Fu, Q. Liu, X. Zeng, Y. Wu, L. Yi, W. Hu, and Q. Zhuge*, “Multi-dimensional distribution matching for probabilistic shaped high order modulation format,” Optical Fiber Communications (OFC) Conference, Paper Th1G.5, 2020."]},{name:"Hexun Jiang",time:"2019.07",research:"Fiber polarization effects, optimization of the optical communication",hobby:"Work, sports, game",img:"https://codimd.s3.shivering-isles.com/demo/uploads/upload_f72eefbdcc4a265bc9edd8822ad58e39.png",email:"jianghexun@sjtu.edu.cn",honors:"",papers:["[2] H. Jiang, Z. Zhai, X. Zeng, M. Fu, Y. Fan, L. Yi, W. Hu, and Q. Zhuge*, “Ultra-fast RSOP tracking via 3 pilot tones for short-distance coherent SCM systems,” Optics Express, vol. 29, no. 6, pp. 8076-8086, 2021.","[1] Z. Zhai, H. Jiang, M. Fu, L. Liu, L. Yi, W. Hu, and Q. Zhuge*, “An interpretable mapping from a communication system to a neural network for optimal transceiver-joint equalization,” IEEE/OSA Journal of Lightwave Technology, 2021."]},{name:"Mengfan Fu",time:"2019.09",research:"Optical fiber communications, coded mudulation",hobby:"Travel, reading, basketball",img:"https://codimd.s3.shivering-isles.com/demo/uploads/upload_3156c033e359d3c59bbed9f51800769d.png",email:"mengfan.fu@sjtu.edu.cn",honors:["[3] 2020 Corning Outstanding Student Paper Competition Grand Prize Winner","[2] National Scholarship, 2019-2020","[1] Shanghai Outstanding Graduates Awards, 2019"],papers:["[14] Y. Fan, M. Fu, H. Jiang, X. Liu, Q. Liu, Y. Xu, L. Yi, W. Hu, and Q. Zhuge*, “Point-to-multipoint coherent architecture with joint source allocation for B5G/6G fronthaul,” IEEE Wireless Communications, 2021.","[13] M. Fu, Q. Liu, Y. Xu, H. Jiang, X. Zeng, Y. Wu, L. Yi, W. Hu, and Q. Zhuge*, “Multi-dimensional distribution matching with bit-level shaping for probabilistically shaped high order modulation formats,” IEEE/OSA Journal of Lightwave Technology, 2021.","[12] M. Fu, Q. Liu, H. Lun, H. Jiang, Y. Wu, X. Liu, Z. Yang, L. Yi, W. Hu, and Q. Zhuge*, “Parallel bisection-based distribution matching for nonlinearity-tolerant probabilistic shaping in coherent optical communication systems,” IEEE/OSA Journal of Lightwave Technology, vol. 39, no. 20, pp. 6459-6469, 2021.","[11] Q. Liu, M. Fu, H. Jiang, H. Ren, M. Cai, X. Zeng, H. Lun, L. Yi, W. Hu, and Q. Zhuge*, “Subcarrier-pairing entropy loading for subcarrier-multiplexing systems with colored-SNR distributions,” Optics Express, vol. 29, no. 18, pp. 28852-28863, 2021.","[10] Y. Fan, M. Fu, X. Liu, Y. Xu, L. Yi, W. Hu, and Q. Zhuge*, “Low-cost asymmetric point-to-multipoint coherent architecture for access networks,” Optical Fiber Communications (OFC) Conference, Paper Th3E.6, 2021.","[9] M. Fu, Q. Liu, X. Zeng, Y. Wu, L. Yi, W. Hu, and Q. Zhuge*, “Parallel bisection-based distribution matching for probabilistic shaping,” Optical Fiber Communications (OFC) Conference, Paper Th1G.2, 2020.","[8] M. Fu, Q. Liu, X. Zeng, Y. Wu, L. Yi, W. Hu, and Q. Zhuge*, “Multi-dimensional distribution matching for probabilistically shaped high order modulation format,” Optical Fiber Communications (OFC) Conference, Paper Th1G.5, 2020.","[7] M. Fu, H. Lun, Q. Liu, X. Liu, M. Cai, L. Yi, W. Hu, and Q. Zhuge*, “Investigation of CCDM implementation in long-haul subcarrier-multiplexing transmissions,” Signal Processing in Photonic Communications (SPPCom) Conference, Paper SpTh3I.5, 2020.","[6] H. Lun, M. Fu, X. Liu, Y. Wu, L. Yi, W. Hu, and Q. Zhuge*, “Soft failure identification for long-haul optical communication systems based on one-dimensional convolutional neural network,” IEEE/OSA Journal of Lightwave Technology, vol. 38, no. 11, pp. 2992-2999, 2020.","[5] Q. Zhuge*, M. Fu, Q. Liu, L. Yi, W. Hu, “Efficient nonlinearity-tolerant probabilistic shaping for capacity-approaching optical transmission systems,” Signal Processing in Photonic Communications (SPPCom) Conference, Paper SpTu2I.4, 2020.","[4] H. Ren, M. Fu, X. Zeng, Z. Zhai, Y. Fan, Q. Liu, L. Yi, W. Hu, and Q. Zhuge*, “Joint power optimization of PTMP coherent architecture for improving link budget in downlink transmission,” Asia Communications and Photonics Conference (ACP), Paper M4A.316, 2020.","[3] Z. Zhai, M. Fu, L. Liu, H. Jiang, H. Ren, L. Yi, W. Hu, and Q. Zhuge*, “Transmitter IQ mismatch compensation and monitoring for digital subcarrier-multiplexing systems,” Asia Communications and Photonics Conference (ACP), Paper M4A.319, 2020.","[2] M. Fu, Q. Zhuge*, Q. Liu, Y. Fan, K. Zhang and W. Hu, “Advanced optical transmission technologies for 5G fronthaul,” OptoElectronics and Communications Conference (OECC), Paper S1-5, 2019.","[1] Q. Zhuge*, M. Fu, H. Lun, X. Liu, and W. Hu, “Fiber nonlinearity mitigation and compensation for capacity-approaching optical transmission systems,” Asia Communications and Photonics Conference (ACP), Paper T4B.1, 2019."]},{name:"Xiaomin Liu",time:"2020.09",research:"Optical network modeling, optical network monitoring, online learning for optical networks systems",hobby:"Bodypump, Bodycombat",img:"https://codimd.s3.shivering-isles.com/demo/uploads/upload_a34a1ba11eeeab1a27f9d1642693f76a.png",email:"xiaomin.liu@sjtu.edu.cn",honors:["[5] Best Student Paper Award in Asia Communications and Photonics (ACP) Conference","[4] National Scholarship, 2021","[3] Shanghai Outstanding Graduates Awards, 2020","[2] Excellent Bachelor's Degree Thesis in Shanghai Jiao Tong University, 2020","[1] National Scholarship, 2020"],papers:["[14] Y. Liu, X. Liu, L. Liu, Y. Zhang, M. Cai, L. Yi, W. Hu, and Q. Zhuge*, “Modeling EDFA gain: approaches and challenges,” Photonics, vol. 8, no. 10, pp. 417:1-9, 2021.","[13] X. Liu, H. Lun, G. Ruo, M. Cai, L. Yi, W. Hu, and Q. Zhuge*, “A data-fusion-assisted telemetry layer for autonomous optical networks,” IEEE/OSA Journal of Lightwave Technology, 2021.","[12] H. Lun, X. Liu, M. Cai, Y. Zhang, R. Gao, W. Hu, L. Yi and Q. Zhuge*, “Machine-learning-based telemetry for monitoring long-haul optical transmission impairments: methodologies and challenges,” IEEE/OSA Journal of Optical Communications and Networking, vol. 13, no. 10, pp. E94-E108, 2021. (Invited paper)","[11] Q. Qiu, X. Liu, Y, Zhang, L. Yi, W. Hu, and Q. Zhuge*, “A meta-learning-assisted training framework with confidence interval for optical networking modeling,” Advanced Photonics Congress (APC), Paper NeF2B.1, 2021.","[10] X. Liu, L. Liu, H. Lun, Y. Zhang, L. Yi, W. Hu, and Q. Zhuge*, “A gray-box model for estimating nonlinear SNR in optical networks based on physics-guided neural networks,” Asia Communications and Photonics Conference (ACP), Paper M5I.1, 2021.","[9] X. Liu, H. Lun, M. Fu, Y. Fan, L. Yi, W. Hu and Q. Zhuge*, “AI-based modeling and monitoring techniques for future intelligent elastic optical networks,” Applied Sciences, vol. 10, no. 1, pp. 363-380, 2020. (Invited paper)","[8] Y. Zhang, X. Liu, Q. Qiu, Y. Liu, M. Chen, L. Yi, W. Hu, and Q. Zhuge*, “Multi-dimensional EDFA gain spectrum optimization for increasing WDM system capacity,” Photonic Networks and Devices (Networks), Paper NeF1B.5, 2021.","[7] L. Liu, X. Liu, Z. Zhai, Y. Wu, H. Jiang, L. Yi, W. Hu, and Q. Zhuge*, “FPGA-based implementation of artificial neural network for nonlinear signal-to-noise ratio estimation,” OptoElectronics and Communications Conference (OECC), Paper T2B.4, 2021.","[6] H. Lun, X. Liu, M. Cai, Y. Wu, M. Fu, L. Yi, W. Hu, and Q. Zhuge*, “GAN based soft failure detection and identification for long-haul coherent transmission systems,” Optical Fiber Communications (OFC) Conference, Paper 2021.","[5] X. Liu, H. Lun, M. Fu, Q. Qiu, L. Yi, W. Hu, and Q. Zhuge*, “A meta-learning-assisted training framework for application deployment to optical networks,” European Conference on Optical Communication (ECOC), Paper 74RJ9DPG49, 2020.","[4] X. Liu, H. Lun, M. Fu, Y. Fan, L. Yi, W. Hu, and Q. Zhuge*, “A three-stage framework for customizing link models for optical networks,” Optical Fiber Communications (OFC) Conference, Paper Th3D.6, 2020.","[3] X. Liu, H. Lun, M. Fu, L. Yi, W. Hu, and Q. Zhuge*, “Machine learning based fiber nonlinear noise monitoring for subcarrier-multiplexing systems,” Optical Fiber Communications (OFC) Conference, Paper M2J.6, 2020.","[2] Q. Zhuge*, X. Liu, H. Lun, M. Fu, L. Yi, and W. Hu, “DSP-aided telemetry in monitoring linear and nonlinear optical transmission impairments,” Optical Fiber Communications (OFC) Conference, Paper M2J.1, 2020.","[1] H. Lun, X. Liu, M. Cai, M. Fu, Y. Wu, L. Yi, W. Hu, and Q. Zhuge*, “Anomaly localization in optical transmissions based on receiver DSP and artificial neural network,” Optical Fiber Communications (OFC) Conference, Paper W1K.4, 2020."]},{name:"Zhiyuan Yang",isCosupervised:"(co-supervised with Prof. Weisheng Hu)",time:"2021.09",research:"Nonlinearity, Raman amplification",hobby:"YO-GI-OH, arknights, HearthStone, badminton",img:"https://codimd.s3.shivering-isles.com/demo/uploads/upload_cb9fe4d035a148ea9e9e7de8875d4224.png",email:"zhiyuan.yang@sjtu.edu.cn",honors:"SEIEE’s merit student， 2017-2018",papers:["[1] Z. Yang, Y. Wu, H. Jiang, M. Fu, L. Yi, W. Hu, and Q. Zhuge*, “Neural-network-based generalized filter for inter-channel nonlinear compensation in long-haul optical transmission,” OptoElectronics and Communications Conference (OECC), 2021."]}]},{type:"Master Students",list:[{name:"Zhiqun Zhai",time:"2019.09",research:"Digital signal processing: transceiver-joint equalization, IQ error in subcarrier system",hobby:"Watching movies, playing badminton",img:"https://codimd.s3.shivering-isles.com/demo/uploads/upload_b4e5826adc370a9f211d261f35529001.png",email:"zhaizhiqun@sjtu.edu.cn",honors:"",papers:["[4] Z. Zhai, H. Jiang, M. Fu, L. Liu, L. Yi, W. Hu, and Q. Zhuge*, “An interpretable mapping from a communication system to a neural network for optimal transceiver-joint equalization,” IEEE/OSA Journal of Lightwave Technology, 2021.","[3] H. Jiang, Z. Zhai, X. Zeng, M. Fu, Y. Fan, L. Yi, W. Hu, and Q. Zhuge*, “Ultra-fast RSOP tracking via 3 pilot tones for short-distance coherent SCM systems,” Optics Express, vol. 29, no. 6, pp. 8076-8086, 2021.",'[2] H. Xu, Z. Zhai, H. Jiang, L. Yi, W. Hu, and Q. Zhuge*, "Transmitter laser frequency offset estimation based on artificial neural network for coherent optical systems," Signal Processing in Photonic Communications (SPPCom) Conference, Paper SpM5C.4, 2021.',"[1] Z. Zhai, M. Fu, L. Liu, H. Jiang, H. Ren, L. Yi, W. Hu, and Q. Zhuge*, “Transmitter IQ mismatch compensation and monitoring for digital subcarrier-multiplexing systems,” Asia Communications and Photonics Conference (ACP), Paper M4A.319, 2020."]},{name:"Lei Liu",time:"2019.09",research:"Monitoring techniques in elastic optical networks, optimization algorithms of resource allocation",hobby:"Hand-making, baking, watching movies, reading mystery novels",img:"https://codimd.s3.shivering-isles.com/demo/uploads/upload_953d842d17bc2b07d3ae0a678549e0b0.png",email:"liulei_sjtu@sjtu.edu.cn",honors:"",papers:["[3] L. Liu, X. Liu, Z. Zhai, Y. Wu, H. Jiang, L. Yi, W. Hu, and Q. Zhuge*, “FPGA-based implementation of artificial neural network for nonlinear signal-to-noise ratio estimation,” OptoElectronics and Communications Conference (OECC), 2021.","[2] X. Liu, L. Liu, H. Lun, Y. Zhang, L. Yi, W. Hu, and Q. Zhuge*, “A gray-box model for estimating nonlinear SNR in optical networks based on physics-guided neural networks,” Asia Communications and Photonics Conference (ACP), Paper M5I.1, 2021.","[1] R. Gao, L. Liu, X. Liu, H. Lun, L. Yi, W. Hu, and Q. Zhuge*, “An overview of ML-based applications for next generation optical networks,” Information Sciences, vol. 63, pp. 160302:1-160302:16, 2020."]},{name:"Yunyun Fan",time:"2020.09",research:"Optical wireless convergence, data center optical networks",hobby:"badmiton",img:"https://codimd.s3.shivering-isles.com/demo/uploads/upload_b33cfbde1f8514828aadda3294ad03f4.png",email:"fanyunyun@sjtu.edu.cn",honors:"",papers:['[2] Y. Fan, M. Fu, H. Jiang, X. Liu, Q. Liu, Y. Xu, L. Yi, W. Hu, and Q. Zhuge*, "Point-to-multipoint coherent architecture with joint source allocation for B5G/6G fronthaul," IEEE Wireless Communications, 2021.',"[1] Y. Fan, M. Fu, X. Liu, Y. Xu, L. Yi, W. Hu, and Q. Zhuge*, “Low-cost asymmetric point-to-multipoint coherent architecture for access networks,” Optical Fiber Communications (OFC) Conference, Paper Th3E.6, 2021."]},{name:"Ruoxuan Gao",time:"2020.09",research:"Ultra-band transmission, optimization algorithms in optical networks",hobby:"movies, dance, music, aesthetics",img:"https://codimd.s3.shivering-isles.com/demo/uploads/upload_f8070fa94ae8a5ab25b2028ac8493763.png",email:"echo.xuan@sjtu.edu.cn",honors:"",papers:["[1] R. Gao, L. Liu, X. Liu, H. Lun, L. Yi, W. Hu, and Q. Zhuge*, “An overview of ML-based applications for next generation optical networks,” Information Sciences, vol. 63, pp. 160302:1-160302:16, 2020."]},{name:"Yihao Zhang",time:"2021.09",research:"Multi-band transmission, Programmable EDFA, System optimization",hobby:"Genshin, Overwatch, HearthStone, basketball",img:"https://codimd.s3.shivering-isles.com/demo/uploads/upload_b20b77098076bce0b9385fe68878d4cf.jpg",email:"yihao.zhang@sjtu.edu.cn",honors:"",papers:["[1] Y. Zhang, X. Liu, Q. Qiu, Y. Liu, M. Chen, L. Yi, W. Hu, and Q. Zhuge*, “Multi-dimensional EDFA gain spectrum optimization for increasing WDM system capacity,” Photonic Networks and Devices (Networks), Paper NeF1B.5, 2021."]},{name:"Yichen Liu",time:"2021.09",research:"EDFA modeling",hobby:"handcraft/table tennis",img:"https://codimd.s3.shivering-isles.com/demo/uploads/upload_941f2482ea955b4c9a3a57164e10920d.png",email:"Lyra-2377@sjtu.edu.cn",honors:"",papers:["[2] Y. Liu, X. Liu, L. Liu, Y. Zhang, M. Cai, L. Yi, W. Hu, and Q. Zhuge*, “Modeling EDFA gain: approaches and challenges,” Photonics, vol. 8, no. 10, pp. 417:1-9, 2021.","[1] Q. Zhuge*, Y. Liu, X. Liu, H. Lun, M. Cai, L. Yi, and W. Hu, “Transmission performance evaluation throughout the life cycle lightpath in intelligent optical networks,” Asia Communications and Photonics Conference (ACP), Paper S4C.3, 2020."]},{name:"Xueying Zhong",time:"2021.09",research:"Optical network",hobby:"gourmet",img:"https://codimd.s3.shivering-isles.com/demo/uploads/upload_9eaf7ccdfcc206b071a89ebdeb834665.jpeg",email:"xueying.zhong@sjtu.edu.cn",honors:"",papers:[]}]},{type:"Undergraduate Students",list:[{name:"Qizhi Qiu",time:"2019.12",research:"",hobby:"soccer and badminton",img:"https://codimd.s3.shivering-isles.com/demo/uploads/upload_33fa91aa49b21f80ddaad64087766f44.jpg",email:"cheese-qiu@sjtu.edu.cn",honors:["CASC scholarship, 2020","Second prize of Ti Cup Shanghai Electronic Design Competition, 2020"],papers:["[1] Q. Qiu, X. Liu, Y, Zhang, L. Yi, W. Hu, and Q. Zhuge*, “A meta-learning-assisted training framework with confidence interval for optical networking modeling,” Advanced Photonics Congress (APC), Paper NeF2B.1, 2021."]},{name:"Yicheng Xu",time:"2020.07",research:"probabilistic shaping in optical transmission system",hobby:"table tennis, watching movies",img:"https://codimd.s3.shivering-isles.com/demo/uploads/upload_1daf415ca5707b4631b8531b99c5d4b9.jpg",email:"zjxuyicheng@sjtu.edu.cn",honors:"National Scholarship, 2019-2020",papers:["[1] Q. Zhuge*, Y. Xu, Y. Fan, X. Zeng, M. Fu, L. Yi, and W. Hu, “Transmission of Tb/s CPRI-equivalent rate using coherent digital-analog radio-over-fiber (DA-RoF) system,” Optical Fiber Communications (OFC) Conference, Paper W4C.5, 2021."]}]},{type:"Alumni",list:[{name:"Huiling Ren",time:"2019.04-2021.03",research:"Digital radio of fiber, DSP-aided short reach",hobby:"Watching movies, gourmet, running",img:"https://codimd.s3.shivering-isles.com/demo/uploads/upload_a09110bc58318190376714bc7985e771.png",email:"renhuiling@sjtu.edu.cn",honors:"Best Poster Award in Asia Communications and Photonics (ACP) Conference",papers:["[4] Q. Liu, M. Fu, H. Jiang, H. Ren, M. Cai, X. Zeng, H. Lun, L. Yi, W. Hu, and Q. Zhuge*, “Subcarrier-pairing entropy loading for subcarrier-multiplexing systems with colored-SNR distributions,” Optics Express, vol. 29, no. 18, pp. 28852-28863, 2021.","[3] X. Zeng, H. Ren, M. Fu, L. Yi, W. Hu, and Q. Zhuge*, “Optical frequency comb-based cost-effective coherent transmission for intra-datacenter interconnections,” Optics Express, vol. 29, no. 11, pp. 17522-17533, 2021. ","[2] H. Ren, M. Fu, X. Zeng, Z. Zhai, Y. Fan, Q. Liu, L. Yi, W. Hu, and Q. Zhuge*, “Joint power optimization of PTMP coherent architecture for improving link budget in downlink transmission,” Asia Communications and Photonics Conference (ACP), Paper M4A.316, 2020.","[1] Z. Zhai, M. Fu, L. Liu, H. Jiang, H. Ren, L. Yi, W. Hu, and Q. Zhuge*, “Transmitter IQ mismatch compensation and monitoring for digital subcarrier-multiplexing systems,” Asia Communications and Photonics Conference (ACP), 2020"]},{name:"Yiwen Wu",time:"2018.09-2021.03",research:"Nonlinearity compensation",hobby:"Cats",img:"https://codimd.s3.shivering-isles.com/demo/uploads/upload_a381e0341016a931c788fff2214a8332.JPG",email:"evanwu@sjtu.edu.cn",honors:"Wen-Yuan Pan Scholarship",papers:["[14] M. Fu, Q. Liu, Y. Xu, H. Jiang, X. Zeng, Y. Wu, L. Yi, W. Hu, and Q. Zhuge*, “Multi-dimensional distribution matching with bit-level shaping for probabilistically shaped high order modulation formats,” IEEE/OSA Journal of Lightwave Technology, 2021.","[13] H. Lun, Y. Wu, M. Cai, X. Liu, R. Gao, M. Fu, L. Yi, W. Hu, and Q. Zhuge*, “ROADM-induced anomaly localization and evaluation for optical links based on receiver DSP and ML,” IEEE/OSA Journal of Lightwave Technology, vol. 39, no. 9, pp. 2696-2703, 2021.","[12] M. Fu, Q. Liu, H. Lun, H. Jiang, Y. Wu, X. Liu, Z. Yang, L. Yi, W. Hu, and Q. Zhuge*, “Parallel bisection-based distribution matching for nonlinearity-tolerant probabilistic shaping in coherent optical communication systems,” IEEE/OSA Journal of Lightwave Technology, 2021.","[11] H. Lun, X. Liu, M. Cai, Y. Wu, M. Fu, L. Yi, W. Hu, and Q. Zhuge*, “GAN based soft failure detection and identification for long-haul coherent transmission systems,” Optical Fiber Communications (OFC) Conference, Paper Th4J.2, 2021.","[10] L. Liu, X. Liu, Z. Zhai, Y. Wu, H. Jiang, L. Yi, W. Hu, and Q. Zhuge*, “FPGA-based implementation of artificial neural network for nonlinear signal-to-noise ratio estimation,” OptoElectronics and Communications Conference (OECC), 2021.","[9] Z. Yang, Y. Wu, H. Jiang, M. Fu, L. Yi, W. Hu, and Q. Zhuge*, “Neural-network-based generalized filter for inter-channel nonlinear compensation in long-haul optical transmission,” OptoElectronics and Communications Conference (OECC), 2021.","[8] M. Fu, Q. Liu, X. Zeng, Y. Wu, L. Yi, W. Hu, and Q. Zhuge*, “Parallel bisection-based distribution matching for probabilistic shaping,” Optical Fiber Communications (OFC) Conference, Paper Th1G.2, 2020.","[7] H. Lun, X. Liu, M. Cai, M. Fu, Y. Wu, L. Yi, W. Hu, and Q. Zhuge*, “Anomaly localization in optical transmissions based on receiver DSP and artificial neural network,” Optical Fiber Communications (OFC) Conference, Paper W1K.4, 2020.","[6] M. Fu, Q. Liu, X. Zeng, Y. Wu, L. Yi, W. Hu, and Q. Zhuge*, “Multi-dimensional distribution matching for probabilistic shaped high order modulation format,” Optical Fiber Communications (OFC) Conference, Paper Th1G.5, 2020.","[5] S. Wang, Y. Wu, L. Yi, W. Hu, and Q. Zhuge*, “Blind adaptive degenerated look-up table based perturbative nonlinear compensation for 16QAM probabilistically shaped signals,” Optics Frontiers Online 2020, Paper SPIE 11604, 2020.","[4] Y. Wu, H. Lun, M. Fu, X. Zeng, X. Liu, Q. Liu, L. Yi, W. Hu, and Q. Zhuge*, “Degenerated look-up table-based perturbative fiber nonlinearity compensation algorithm for probabilistically shaped signals,” Optics Express, vol. 28, no. 9, pp. 13401-13413, 2020.","[3] H. Lun, M. Fu, X. Liu, Y. Wu, L. Yi, W. Hu, and Q. Zhuge*, “Soft failure identification for long-haul optical communication systems based on one-dimensional convolutional neural network,” IEEE/OSA Journal of Lightwave Technology, vol. 38, no. 11, pp. 2992 - 2999, 2020.","[2] Y. Wu, Q. Zhuge*, Q. Liu, H. Lun, M. Fu, X. Zeng, M. Cai, L. Yi, and W. Hu, “Efficient fiber nonlinearity compensation for probabilistically shaped signals,” Asia Communications and Photonics Conference (ACP), Paper T3B.2, 2019.","[1] H. Lun, Q. Zhuge*, M. Fu, Y. Wu, Q. Liu, M. Cai, X. Zeng, and W. Hu, “Soft failure identification in optical networks based on convolutional neural network,” European Conference on Optical Communication (ECOC), Paper P104, 2019."]}]}]}},methods:{showDetail:function(i){this.currInfo=i,this.showModal=!0}}},s=t,r=(e("d0e1"),e("2877")),u=Object(r["a"])(s,a,o,!1,null,"fc71ec26",null);n["default"]=u.exports},bd23:function(i,n,e){},d0e1:function(i,n,e){"use strict";e("bd23")}}]);
//# sourceMappingURL=chunk-88cb5f70.7254227d.js.map