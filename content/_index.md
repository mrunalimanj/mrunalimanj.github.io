---
title: Mrunali Manjrekar
# subtitle: CSB PhD student at MIT
news: |
  - **October 2026** — I gave an invited talk at the MIT CSB Retreat.
  - **July 2026** — Our [MassSpecGym in the Wild](https://arxiv.org/abs/2606.19624) paper received the **Best Paper Award** at the ICML 2026 GenBio Workshop!
  - **June 2026** — Runzhong and I gave invited talks and tutorials teaching students at the Metabolomics Summer School (University of Denver) on utilizing our machine learning tools for metabolomic discovery.
research: |
  My research develops generative models for scientific inverse problems in chemical and biological design, investigating how to utilize imperfect physics-aware forward oracles to guide models toward valid and high-value molecular candidates.

  - **Train- and test-time scaling with imperfect oracles:** Developing discrete generative methods (e.g. diffusion, genetic algorithms), relying on simulator guidance to perform iterative optimization, focusing synthetic data utilization on points that most resembles the target data distribution ([SOUR](/papers/sour.pdf), [FRIGID](https://arxiv.org/abs/2604.16648), [FOAM](https://arxiv.org/abs/2602.07709)).
  - **Scientific evaluation and reliability:** Auditing data leakage, shortcut learning, and oracle exploitation (reward hacking) to build trustworthy benchmarks for real-world molecular discovery ([MassSpecGym in the Wild](https://arxiv.org/abs/2606.19624)).
  - **Biocatalytic design:** I am currently extending generative modeling and quantum-chemistry-informed surrogates to approach challenges in enzyme optimization and design. 
scholar: https://scholar.google.com/citations?user=6y3-Ih4AAAAJ&hl=en
publications: |
  - **[SOUR: Scaling Synthetic Data for Small Molecule Structure Elucidation via Train- and Test-Time Guidance](/papers/sour.pdf)**  
    **H. Liu\*, M. Manjrekar**\*, R. Wang, and C. W. Coley. (\*Equal contribution.)  
    *Preprint forthcoming.*   
    We identify inefficiencies in naive scaling with synthetic data, which greatly influences the performance of inverse models where  inductive biases are harder to induce. We then introduce SOUR, a framework for selecting query-informed synthetic data to train model components in need of synthetic data, then calibrate the remaining components to correct for their error. In MS/MS elucidation, we reach _de novo_ accuracy (27.4% Top-1 on NPLIB1, 18.0% on MassSpecGym) on a new accuracy–cost Pareto front.

  - **[MassSpecGym in the Wild: Uncovering and Correcting Evaluation Pitfalls in AI-Driven Molecule Discovery](https://arxiv.org/abs/2606.19624)**  
    H. Liu*, R. Bushuiev*, I. Lightheart*, **M. Manjrekar**, ..., C. W. Coley.  
    *ICML 2026 GenBio Workshop*: Oral and **Best Paper Award** [[arXiv]](https://arxiv.org/abs/2606.19624) [[Code]](https://github.com/pluskal-lab/MassSpecGym)  
    We investigate subtle forms of leakage and unfair benchmarking in the ML for MS/MS literature, identify biases arising from unfair selection of pretraining corpora, and revises the [MassSpecGym](https://arxiv.org/abs/2410.23326) benchmark to improve benchmarking utility and best practices.

  - **[Generative structural elucidation from mass spectra as an iterative optimization problem](https://arxiv.org/abs/2602.07709)**  
    **M. Manjrekar***, R. Wang, S. Goldman, J. C. Fromer, and C. W. Coley.  
    *Analytical Chemistry*, *in press* [[arXiv]](https://arxiv.org/abs/2602.07709) [[Code]](https://github.com/coleygroup/foam)  
    *FOAM frames structure elucidation as formula-constrained multi-objective optimization guided by a learned simulator (ICEBERG), more than doubling Top-10 recovery over competing zero-shot generators.*

  - **[FRIGID: Scaling Diffusion-Based Molecular Generation from Mass Spectra at Training and Inference Time](https://arxiv.org/abs/2604.16648)**  
    M. Bohde*, H. Liu*, **M. Manjrekar**, M. Lederbauer, S. Ji, R. Wang, and C. W. Coley.  
    *ICML 2026* [[arXiv]](https://arxiv.org/abs/2604.16648) [[Code]](https://github.com/coleygroup/FRIGID)  
    Scales discrete diffusion across hundreds of millions of unlabeled molecules and uses forward-model-guided remasking to achieve log-linear accuracy gains with inference-time compute.

  - **[Neural spectral prediction for structure elucidation with tandem mass spectrometry](https://doi.org/10.1101/2025.05.28.656653)**  
    R. Wang*, **M. Manjrekar**, ... C. W. Coley.   
    *Nature Methods*, accepted [[Preprint]](https://doi.org/10.1101/2025.05.28.656653) [[Code]](https://github.com/coleygroup/ms-pred)  
    We develop ICEBERG, a chemically interpretable geometric deep learning spectral simulator reaching 40% Top-1 and 92% Top-10 retrieval on a holdout of the largest reference library; we demonstrate its utility in elucidating features of interest across several clinical and biochemical studies. 

  - **[DiffMS: Diffusion Generation of Molecules Conditioned on Mass Spectra](https://arxiv.org/abs/2502.09571)**  
    M. Bohde*, **M. Manjrekar**, R. Wang, S. Ji, and C. W. Coley.  
    *ICML 2025* [[arXiv]](https://arxiv.org/abs/2502.09571) [[Code]](https://github.com/coleygroup/DiffMS)  
    DiffMS pioneers formula-constrained discrete graph diffusion pretrained on fingerprint–structure pairs.
---

Hi! I am a fourth-year PhD student in the Computational and Systems Biology program at MIT advised by [Prof. Connor W. Coley](http://coley.mit.edu/). My research develops generative models that learn from imperfectly trained physics-aware oracles to address challenges around the discovery and design of small molecules, in the context of **_de novo_ structural elucidation** and **enzyme design**. I am supported by the NSF Graduate Fellowship (GRFP). 

I graduated from the University of California, Berkeley (🐻) in 2023 with a B.S. in Electrical Engineering and Computer Sciences and Bioengineering. During this period, I was extremely grateful to work with Prof. [Jennifer Listgarten](https://people.eecs.berkeley.edu/~jlistgarten/) on generative models of protein sequences and Prof. [Debora Marks](https://www.hms.harvard.edu/research-labs/debora-marks-lab) on viral-host protein covariation and variant effects. I also spent a summer at [Cellarity](https://www.cellarity.com/) developing phenotypic predictors of genetic perturbations in single-cell data.

I love learning from other people and am passionate about discussing the best ways to apply deep learning to solve problems in chemistry and biology! If you are interested in connecting or collaborating, please feel free to reach out. 
<!-- **I am also looking for motivated undergraduate researchers.** If you are excited about molecular discovery or generative modeling, please email me with a brief introduction and your research interests.  -->
