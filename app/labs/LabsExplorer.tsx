"use client";

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  Activity, ArrowUpLeft, Binary, Bug, CheckCircle2, ChevronDown, Cloud,
  Code2, Cpu, Database, FileSearch, FlaskConical, Fingerprint, Globe,
  HardDrive, LockKeyhole, Network, Search, Server, Shield, ShieldCheck,
  Siren, Terminal, Wifi, Workflow, Factory, BrainCircuit, ScanSearch
} from 'lucide-react';

type Lab = {
  id: string; name: string; en: string; category: string; status: string;
  summary: string; goal: string; environment: string; tools: string[];
  objectives: string[]; workflow: string[]; safety: string; outputs: string[];
  Icon: typeof Shield;
};

const labs: Lab[] = [
  {
    id: 'network-defense', name: 'أمن الشبكات والدفاع السيبراني', en: 'NETWORK SECURITY & DEFENSE', category: 'الدفاع والشبكات',
    status: 'مسار تعلم وتطبيق', summary: 'تصميم الشبكات وتقسيمها ومراقبتها وتقوية حدودها، من إعداد الجدار الناري إلى تحليل الحزم.',
    goal: 'بناء شبكة اختبار آمنة، وتطبيق ضوابط الحماية، ومراقبة الاتصالات واكتشاف السلوك الشبكي غير المعتاد.',
    environment: 'شبكات افتراضية متعددة المناطق · Linux وWindows · موجهات ومحولات افتراضية · أجهزة جدار ناري تجريبية.',
    tools: ['pfSense / OPNsense', 'iptables / nftables', 'Wireshark', 'Suricata', 'Zeek', 'Cisco Packet Tracer'],
    objectives: ['تصميم VLANs وتقسيم الشبكة ومناطق الثقة', 'إنشاء قواعد Firewall والتحقق من أقل صلاحية', 'فهم IDS/IPS وضبط قواعد الكشف', 'تحليل PCAP وDNS وTCP والتدفقات', 'إعداد خرائط الأصول ومراقبة الخدمات'],
    workflow: ['رسم الطوبولوجيا وتحديد الأصول', 'تطبيق التقسيم والسياسات', 'توليد حركة مرور اختبارية', 'تحليل التنبيهات والتحقق من الضوابط'],
    safety: 'تُجرى الاختبارات داخل شبكة افتراضية مملوكة أو مصرح بها. لا يُفحص أي عنوان عام أو شبكة خارج نطاق المختبر.',
    outputs: ['مخطط الشبكة ومناطق الثقة', 'قواعد الجدار الناري ومبرراتها', 'ملخص PCAP ومؤشرات الاتصال', 'نتائج تحقق IDS/IPS'],
    Icon: Network
  },
  {
    id: 'pentest', name: 'اختبار الاختراق والفريق الأحمر', en: 'PENETRATION TESTING & RED TEAMING', category: 'التقييم الهجومي',
    status: 'مسار تعلم وتطبيق', summary: 'تقييم أمني منظم للأنظمة والخدمات والتطبيقات ضمن نطاق اختبار محدد ومصرح به.',
    goal: 'تطبيق منهجية تقييم تبدأ بالاستطلاع المنضبط وتنتهي بإثبات الأثر وكتابة توصيات معالجة قابلة للتنفيذ.',
    environment: 'مختبر افتراضي معزول · أهداف تدريبية مثل Metasploitable وOWASP Broken Web Apps · لقطات استرجاع.',
    tools: ['Kali Linux', 'Nmap', 'Metasploit Framework', 'Burp Suite', 'Nuclei', 'testssl.sh'],
    objectives: ['تحديد النطاق وقواعد الاشتباك ROE', 'حصر الخدمات والإصدارات داخل المختبر', 'التحقق من الثغرات دون إحداث ضرر', 'تقدير الخطورة والأثر ومسارات الوصول', 'صياغة تقرير تنفيذي وتقني مع إعادة اختبار'],
    workflow: ['اعتماد النطاق وقواعد الاختبار', 'جمع المعلومات وحصر السطح', 'التحقق الآمن من نقاط الضعف', 'تقرير الأدلة وخطة المعالجة'],
    safety: 'محاكاة الهجمات تقتصر على أهداف تدريبية أو أنظمة يملكها المستخدم أو لديه تصريح مكتوب لاختبارها. لا يتضمن المسار استهداف أطراف حقيقية.',
    outputs: ['وثيقة النطاق وقواعد الاشتباك', 'سجل النتائج المصنفة حسب الخطورة', 'أدلة تحقق منزوعة البيانات الحساسة', 'تقرير المعالجة وإعادة الاختبار'],
    Icon: ScanSearch
  },
  {
    id: 'forensics', name: 'التحقيق الجنائي الرقمي والاستجابة للأدلة', en: 'DIGITAL FORENSICS & EVIDENCE', category: 'التحقيق والاستجابة',
    status: 'مسار تعلم', summary: 'اقتناء الأدلة الرقمية وحفظ سلامتها وتحليل أنظمة الملفات والذاكرة والسجلات.',
    goal: 'اتباع إجراءات جنائية قابلة للتكرار تحافظ على سلامة الدليل وتربط الأحداث بخط زمني واضح.',
    environment: 'صور أقراص تدريبية · ملفات ذاكرة RAM · أجهزة افتراضية · نسخ أدلة للقراءة فقط.',
    tools: ['Autopsy / Sleuth Kit', 'FTK Imager', 'Volatility 3', 'KAPE', 'Plaso / log2timeline', 'ExifTool'],
    objectives: ['توثيق سلسلة الحيازة Chain of Custody', 'حساب Hash والتحقق من سلامة النسخ', 'تحليل الملفات المحذوفة والبيانات الوصفية', 'فحص الذاكرة والعمليات والاتصالات', 'بناء Timeline من سجلات متعددة'],
    workflow: ['تأمين المصدر وتوثيق الاستلام', 'إنشاء نسخة جنائية والتحقق منها', 'تحليل الآثار والبيانات', 'ربط النتائج وكتابة تقرير محايد'],
    safety: 'تُستخدم صور أقراص وذاكرة تدريبية أو أدلة يملكها صاحبها مع تفويض واضح. لا تُستخرج بيانات شخصية من أجهزة الغير.',
    outputs: ['سجل سلسلة الحيازة', 'قيم Hash للأدلة', 'خط زمني للأحداث', 'تقرير النتائج والقيود الفنية'],
    Icon: FileSearch
  },
  {
    id: 'malware', name: 'تحليل البرمجيات الخبيثة والهندسة العكسية', en: 'MALWARE ANALYSIS & REVERSE ENGINEERING', category: 'التحقيق والاستجابة',
    status: 'بيئة معزولة مخططة', summary: 'تحليل الملفات المشبوهة ساكنًا وديناميكيًا وفهم سلوكها ومؤشرات الاختراق.',
    goal: 'فهم بنية العينة وسلوكها ومؤشرات الاستمرارية والاتصال دون تعريض النظام المضيف أو الشبكة للخطر.',
    environment: 'Sandbox معزول · لقطات نظيفة · شبكة محاكاة بلا خروج افتراضي · عينات تعليمية غير ضارة عند التدريب.',
    tools: ['Ghidra', 'Cutter / radare2', 'Detect It Easy', 'YARA', 'PE-bear', 'REMnux'],
    objectives: ['فحص البصمات والبيانات الوصفية والسلاسل', 'قراءة بنية PE وELF ومكتباتها', 'فهم تدفق التنفيذ والاستدعاءات', 'مراقبة الملفات والعمليات والاتصالات', 'كتابة قواعد YARA ومؤشرات IOC'],
    workflow: ['التحقق من العزل واللقطة النظيفة', 'تحليل ساكن دون تشغيل', 'تحليل ديناميكي في Sandbox مضبوط', 'استخراج المؤشرات وكتابة التقرير'],
    safety: 'لا تُشغّل عينات مجهولة على النظام الأساسي أو شبكة متصلة. تُعطّل مشاركة الحافظة والمجلدات، ويُمنع الاتصال الخارجي افتراضيًا.',
    outputs: ['بطاقة تعريف العينة وHash', 'مخطط السلوك ومؤشرات IOC', 'قواعد كشف YARA تجريبية', 'تقرير تحليل وحدود الاستنتاج'],
    Icon: Bug
  },
  {
    id: 'web-appsec', name: 'أمن تطبيقات الويب وواجهات API', en: 'WEB & API APPLICATION SECURITY', category: 'أمن التطبيقات',
    status: 'مسار تعلم وتطبيق', summary: 'اختبار ضوابط الويب وواجهات API وفق OWASP Top 10 وAPI Security Top 10.',
    goal: 'تقييم المصادقة والجلسات والتحكم بالوصول والتحقق من المدخلات وحماية البيانات في تطبيقات تدريبية.',
    environment: 'OWASP Juice Shop وDVWA · تطبيقات API محلية · متصفح وأدوات Proxy داخل شبكة اختبار.',
    tools: ['Burp Suite', 'OWASP ZAP', 'Postman', 'OWASP ZAP API Scan', 'Semgrep', 'JWT tooling'],
    objectives: ['اختبار Broken Access Control وIDOR', 'مراجعة المصادقة وإدارة الجلسات', 'التحقق من مخاطر Injection وXSS', 'فحص إعدادات CORS وCSRF وSecurity Headers', 'اختبار صلاحيات API وحدود المعدل'],
    workflow: ['تحديد التطبيق والأدوار والبيانات', 'رسم نقاط الدخول ومسارات API', 'اختبار الضوابط بحسابات تجريبية', 'تقرير الثغرات وخطوات الإصلاح'],
    safety: 'تُختبر تطبيقات محلية أو تدريبية أو مصرح بها فقط، مع حسابات وبيانات اصطناعية. لا تُرسل حمولات اختبار إلى مواقع عامة.',
    outputs: ['خريطة سطح الهجوم', 'نتائج OWASP مصنفة', 'طلبات واستجابات منقحة', 'توصيات إصلاح واختبارات تحقق'],
    Icon: Globe
  },
  {
    id: 'soc', name: 'مركز العمليات الأمنية والاستجابة للحوادث', en: 'SOC & INCIDENT RESPONSE', category: 'الدفاع والشبكات',
    status: 'مسار تعلم وتطبيق', summary: 'مراقبة التنبيهات وربط الأحداث وإدارة الحوادث عبر SIEM وعمليات الاستجابة.',
    goal: 'محاكاة دورة عمل SOC من استقبال التنبيه وفرزه إلى التحقيق والاحتواء والتعلم بعد الحادث.',
    environment: 'شبكة مختبرية مع Windows/Linux endpoints · خادم سجلات مركزي · سيناريوهات محاكاة آمنة.',
    tools: ['Wazuh', 'Elastic Security', 'Splunk (أساسيات)', 'Sysmon', 'TheHive', 'Shuffle SOAR'],
    objectives: ['جمع السجلات وتوحيدها وربط الأحداث', 'بناء قواعد كشف وتنبيهات قابلة للقياس', 'فرز التنبيهات وتقليل الإيجابيات الكاذبة', 'إنشاء Playbooks للاستجابة', 'قياس MTTD وMTTR وتوثيق الدروس'],
    workflow: ['توليد أحداث اختبارية', 'استقبال وربط السجلات', 'فرز التنبيه والتحقيق', 'احتواء تجريبي وتقرير ما بعد الحادث'],
    safety: 'تُستخدم أحداث اصطناعية أو محاكاة داخل المختبر. لا تُنفّذ إجراءات احتواء على أجهزة إنتاجية أو حسابات حقيقية.',
    outputs: ['لوحة تنبيهات SIEM', 'قواعد كشف موثقة', 'سجل Incident Case', 'Playbook واستعراض ما بعد الحادث'],
    Icon: Siren
  },
  {
    id: 'crypto', name: 'التشفير وأمن البيانات', en: 'CRYPTOGRAPHY & DATA SECURITY', category: 'أمن البيانات والهوية',
    status: 'مسار تعلم', summary: 'تطبيق التشفير وإدارة المفاتيح والتوقيعات الرقمية والتحقق من سلامة البيانات.',
    goal: 'فهم الاستخدام الصحيح للخوارزميات والبروتوكولات ومخاطر إدارة المفاتيح بدل ابتكار تشفير غير موثوق.',
    environment: 'بيئة برمجية محلية · ملفات اختبار · شهادات ومفاتيح تجريبية غير مرتبطة ببيانات حقيقية.',
    tools: ['OpenSSL', 'Python cryptography', 'GnuPG', 'Hashcat (عينات تعليمية)', 'Key management concepts'],
    objectives: ['التمييز بين التشفير المتماثل وغير المتماثل', 'استخدام Hash وHMAC للتحقق من السلامة', 'إنشاء وتحقق التوقيعات الرقمية', 'فهم PKI والشهادات وTLS', 'دراسة التخزين والتدوير والإبطال الآمن للمفاتيح'],
    workflow: ['تحديد نموذج التهديد', 'اختيار بدائيات قياسية معتمدة', 'تنفيذ حالات اختبار', 'تحليل النتائج ومخاطر دورة حياة المفتاح'],
    safety: 'تُستخدم مفاتيح وبيانات اصطناعية. لا تُرفع مفاتيح خاصة أو أسرار إنتاجية إلى المستودعات أو التقارير.',
    outputs: ['تجارب تشفير موثقة', 'نتائج تحقق التوقيع والسلامة', 'مخطط دورة حياة المفتاح', 'ملاحظات مراجعة تصميم تشفيري'],
    Icon: Fingerprint
  },
  {
    id: 'iot', name: 'أمن إنترنت الأشياء والأنظمة المضمنة', en: 'IOT & EMBEDDED DEVICE SECURITY', category: 'الأجهزة والأنظمة المتخصصة',
    status: 'مسار بحث وتطبيق', summary: 'تقييم أمن الأجهزة الذكية وبروتوكولات الاتصال والبرمجيات الثابتة وواجهات التصحيح.',
    goal: 'فهم سطح الهجوم المادي والمنطقي للأجهزة، وتحديد ضوابط التحديث والإقلاع والاتصال الآمن.',
    environment: 'لوحات تطوير مملوكة · أجهزة IoT تدريبية · Firmware تجريبي · شبكة لاسلكية منفصلة.',
    tools: ['ESP32', 'Raspberry Pi', 'Binwalk', 'EMBA', 'MQTT Explorer', 'Logic Analyzer'],
    objectives: ['مراجعة بروتوكولات MQTT وBLE وWi-Fi', 'فحص Firmware واستخراج مكوناته', 'مراجعة الأسرار ومفاتيح الاتصال المخزنة', 'فهم Secure Boot والتحديث الموقّع', 'تقييم واجهات UART/JTAG المصرح بها'],
    workflow: ['تحديد الجهاز ومصدر Firmware', 'استخراج البنية وتحليل الإعدادات', 'مراجعة الاتصالات والواجهات', 'اقتراح تقوية وتحديث آمن'],
    safety: 'يقتصر الفحص المادي على أجهزة مملوكة أو مصرح بها. لا تُعطّل أجهزة أو مستشعرات مستخدمة في خدمات حقيقية.',
    outputs: ['قائمة مكونات Firmware', 'خريطة واجهات وبروتوكولات', 'نتائج مراجعة الأسرار والإعدادات', 'توصيات Secure Boot والتحديث'],
    Icon: Cpu
  },
  {
    id: 'ics', name: 'أمن الأنظمة الصناعية والبنية التحتية', en: 'ICS / SCADA & OT SECURITY', category: 'الأجهزة والأنظمة المتخصصة',
    status: 'مسار تخصصي مخطط', summary: 'فهم مخاطر OT وSCADA وتقسيم الشبكات الصناعية ومراقبة البروتوكولات التشغيلية.',
    goal: 'دراسة حماية أنظمة التحكم الصناعي مع إعطاء الأولوية للسلامة والتوافر واستمرارية التشغيل.',
    environment: 'محاكيات PLC وHMI · شبكة OT افتراضية منفصلة · بيانات تشغيلية اصطناعية.',
    tools: ['OpenPLC', 'Factory I/O', 'Wireshark', 'Conpot', 'MITRE ATT&CK for ICS', 'OPC UA'],
    objectives: ['التمييز بين IT وOT ومتطلبات السلامة', 'رسم مناطق وقنوات Purdue Model', 'فهم Modbus وOPC UA على مستوى البروتوكول', 'مراجعة الوصول البعيد وإدارة التغيير', 'ربط التهديدات بضوابط دفاعية'],
    workflow: ['إنشاء نموذج عملية افتراضية', 'رسم الأصول ومناطق الشبكة', 'مراقبة حركة OT الاصطناعية', 'تحليل المخاطر وخطة التقوية'],
    safety: 'المحاكاة افتراضية فقط. يمنع اختبار أو إرسال أوامر إلى PLC أو SCADA أو منشأة صناعية حقيقية.',
    outputs: ['رسم معماري لمناطق OT', 'قائمة أصول ومخاطر', 'ملخص تحليل بروتوكول', 'خطة تقوية واستجابة'],
    Icon: Factory
  },
  {
    id: 'range', name: 'الميادين السيبرانية والمحاكاة', en: 'CYBER RANGE & PURPLE TEAM', category: 'المحاكاة والتدريب',
    status: 'تصميم مسار متقدم', summary: 'بيئة تدريب متعددة الفرق لتمارين Red Team وBlue Team وPurple Team وسيناريوهات متدرجة.',
    goal: 'تطوير مهارات العمل الجماعي والقياس والتحقق من فعالية الضوابط ضمن سيناريوهات قابلة لإعادة التشغيل.',
    environment: 'شبكات افتراضية قابلة لإعادة البناء · أهداف تدريبية · مراقبة مركزية · سيناريوهات محددة.',
    tools: ['MITRE CALDERA', 'Atomic Red Team', 'DetectionLab', 'Proxmox / VMware', 'Wazuh', 'Terraform'],
    objectives: ['تصميم سيناريوهات وفق ATT&CK', 'توزيع أدوار الفرق وقواعد اللعب', 'قياس تغطية الكشف والاستجابة', 'تنفيذ جلسات Purple Team للتحسين', 'توثيق الدروس ومؤشرات الأداء'],
    workflow: ['اختيار سيناريو وأهداف تعلم', 'تهيئة الشبكة والأدوار', 'تنفيذ محاكاة مضبوطة', 'مراجعة الكشف والاستجابة والتحسين'],
    safety: 'تُستخدم محاكاة وأهداف تدريبية فقط، مع حدود موارد وشبكات واضحة. لا توجد اتصالات هجومية خارج بيئة التدريب.',
    outputs: ['وثيقة سيناريو وتمرين', 'مصفوفة ATT&CK', 'قياسات الكشف والاستجابة', 'تقرير مراجعة Purple Team'],
    Icon: Workflow
  },
  {
    id: 'cloud', name: 'أمن الحوسبة السحابية', en: 'CLOUD SECURITY & CONTAINER DEFENSE', category: 'الدفاع والشبكات',
    status: 'مسار تعلم', summary: 'تقييم إعدادات السحابة والهوية والتخزين والشبكات والحاويات وفق مبدأ أقل صلاحية.',
    goal: 'تحديد أخطاء التهيئة الشائعة وبناء ضوابط للرصد وإدارة الأسرار وحماية أحمال العمل السحابية.',
    environment: 'حسابات Sandbox أو محاكيات محلية · Docker · Kubernetes محلي · بيانات وموارد تجريبية.',
    tools: ['Prowler', 'ScoutSuite', 'Trivy', 'Checkov', 'Docker', 'Kubernetes'],
    objectives: ['مراجعة IAM والأدوار والصلاحيات', 'فحص التخزين المكشوف وسياسات الشبكة', 'تحليل صور الحاويات والاعتماديات', 'مراجعة Secrets وIaC', 'فهم التسجيل والمراقبة والاستجابة'],
    workflow: ['إنشاء بيئة تجريبية محدودة', 'فحص الإعدادات والبنية', 'تصنيف المخاطر حسب الأثر', 'تطبيق الإصلاح وإعادة الفحص'],
    safety: 'تُستخدم حسابات تجريبية بحدود إنفاق وصلاحيات دنيا. لا تُختبر حسابات سحابية أو موارد لا يملك المستخدم تصريحًا بها.',
    outputs: ['تقرير Cloud Posture', 'نتائج فحص IaC والحاويات', 'مصفوفة IAM', 'قائمة معالجة مرتبة'],
    Icon: Cloud
  },
  {
    id: 'devsecops', name: 'أمن البرمجيات وسلاسل التوريد', en: 'SECURE SDLC & DEVSECOPS', category: 'أمن التطبيقات',
    status: 'مسار تعلم وتطبيق', summary: 'دمج الفحوص الأمنية في دورة التطوير ومراجعة الشفرة والاعتماديات وخطوط CI/CD.',
    goal: 'تحويل الأمن إلى ضوابط مستمرة من التصميم والكتابة إلى البناء والنشر ومراقبة المكونات.',
    environment: 'مستودعات تدريبية · CI pipelines · تطبيقات تجريبية · بيئة بناء منفصلة.',
    tools: ['Semgrep', 'CodeQL', 'Gitleaks', 'Dependabot', 'Trivy', 'OWASP ASVS'],
    objectives: ['تطبيق Threat Modeling مبسط', 'تشغيل SAST وDAST وSCA', 'كشف الأسرار والاعتماديات الضعيفة', 'مراجعة صلاحيات CI/CD وحماية artifacts', 'صياغة معايير Secure Coding'],
    workflow: ['مراجعة التصميم والمتطلبات', 'فحص الشفرة والاعتماديات', 'دمج بوابات أمنية في CI', 'معالجة النتائج وتوثيق الاستثناءات'],
    safety: 'يُفحص كود مملوك أو مفتوح المصدر وفق شروط ترخيصه. لا تُنشر نتائج غير متحقق منها أو أسرار مكشوفة.',
    outputs: ['Threat Model', 'تقرير SAST/SCA/DAST', 'قائمة اعتماديات ومخاطر', 'قواعد CI Security'],
    Icon: Code2
  },
  {
    id: 'database', name: 'أمن قواعد البيانات والخصوصية', en: 'DATABASE SECURITY & PRIVACY', category: 'أمن البيانات والهوية',
    status: 'مسار تعلم', summary: 'تقوية قواعد البيانات والتحكم في الوصول ومراجعة التدقيق والتشفير وحماية البيانات.',
    goal: 'تطبيق مبدأ أقل صلاحية وحماية البيانات أثناء التخزين والنقل مع مراقبة أنشطة قواعد البيانات.',
    environment: 'Oracle Database وPostgreSQL وSQLite محلية · بيانات اصطناعية · نسخ احتياطية تجريبية.',
    tools: ['Oracle Audit', 'PostgreSQL roles', 'SQLCipher', 'pgAudit', 'OWASP Database Security'],
    objectives: ['مراجعة الأدوار والمنح والصلاحيات', 'منع حقن SQL عبر الاستعلامات المعلّمة', 'تفعيل التدقيق ومراجعة السجلات', 'حماية النسخ الاحتياطية والبيانات الحساسة', 'تطبيق إخفاء البيانات وتقليلها'],
    workflow: ['إنشاء قاعدة وبيانات اصطناعية', 'مراجعة الصلاحيات والإعدادات', 'اختبار التدقيق والنسخ الاحتياطي', 'توثيق المخاطر والمعالجة'],
    safety: 'تُستخدم بيانات اصطناعية فقط. لا تُجرى اختبارات على قواعد إنتاجية أو بيانات شخصية دون تفويض.',
    outputs: ['مصفوفة صلاحيات DB', 'نتائج مراجعة التدقيق', 'قائمة تحقق للنسخ الاحتياطي', 'توصيات خصوصية وتقليل البيانات'],
    Icon: Database
  },
  {
    id: 'identity', name: 'أمن الهوية وإدارة الوصول', en: 'IDENTITY, IAM & ZERO TRUST', category: 'أمن البيانات والهوية',
    status: 'مسار تخصصي', summary: 'إدارة دورة حياة الحسابات والمصادقة متعددة العوامل والامتيازات والوصول المشروط.',
    goal: 'تصميم نموذج هوية يقلل الامتيازات الدائمة ويجعل الوصول قائمًا على السياق والحاجة.',
    environment: 'Active Directory تجريبي · Keycloak · حسابات اختبار · تطبيقات محلية.',
    tools: ['Keycloak', 'LDAP', 'OAuth 2.0', 'OpenID Connect', 'FIDO2 concepts', 'BloodHound CE (تحليل مختبر)'],
    objectives: ['فهم SSO وFederation وMFA', 'مراجعة دورة إنشاء الحساب وإلغائه', 'تحليل الحسابات ذات الامتيازات', 'تطبيق RBAC ومبادئ Zero Trust', 'مراجعة سجلات المصادقة والجلسات'],
    workflow: ['رسم تدفق الهوية والتطبيقات', 'تعريف الأدوار والسياسات', 'اختبار سيناريوهات دخول تجريبية', 'مراجعة الامتيازات والسجلات'],
    safety: 'تُستخدم هويات اختبارية فقط. لا تُجمع كلمات مرور أو رموز جلسات لمستخدمين حقيقيين.',
    outputs: ['مخطط تدفق المصادقة', 'مصفوفة أدوار وصلاحيات', 'قائمة مراجعة MFA', 'توصيات تقليل الامتيازات'],
    Icon: Fingerprint
  },
  {
    id: 'ai-security', name: 'أمن الذكاء الاصطناعي ونماذج اللغة', en: 'AI SECURITY & LLM RED TEAMING', category: 'المحاكاة والتدريب',
    status: 'مسار بحث وتعلم', summary: 'دراسة تهديدات أنظمة الذكاء الاصطناعي والبيانات والنماذج وسلاسل الأدوات.',
    goal: 'تقييم مخاطر تطبيقات AI بصورة آمنة، تشمل سلامة المدخلات والمخرجات والبيانات والتكاملات.',
    environment: 'نماذج محلية أو تطبيقات تجريبية · بيانات اصطناعية · أدوات تقييم غير متصلة بأنظمة إنتاج.',
    tools: ['OWASP Top 10 for LLMs', 'MITRE ATLAS', 'Promptfoo', 'Garak', 'MLflow', 'Model cards'],
    objectives: ['فهم Prompt Injection وتسريب البيانات', 'اختبار حدود الثقة في RAG ومصادر المعرفة', 'مراجعة صلاحيات الأدوات والوكلاء', 'تقييم سلامة المخرجات والتحيز والخصوصية', 'توثيق التهديدات وضوابط التخفيف'],
    workflow: ['رسم تدفق البيانات والأدوات', 'بناء حالات اختبار آمنة', 'قياس السلوك والنتائج', 'تطبيق الضوابط وإعادة التقييم'],
    safety: 'تُستخدم نماذج وبيانات تجريبية فقط. لا تُرسل بيانات سرية إلى خدمات عامة ولا تُختبر أنظمة AI خارج نطاق التفويض.',
    outputs: ['AI Threat Model', 'مصفوفة حالات اختبار', 'نتائج تقييم RAG والأدوات', 'توصيات حوكمة وتخفيف'],
    Icon: BrainCircuit
  },
  {
    id: 'wireless', name: 'أمن الشبكات اللاسلكية', en: 'WIRELESS & RADIO SECURITY', category: 'الأجهزة والأنظمة المتخصصة',
    status: 'مسار تعلم', summary: 'تقييم إعدادات Wi-Fi والمصادقة والتشفير ومخاطر الأجهزة اللاسلكية.',
    goal: 'تقوية الشبكات اللاسلكية وفهم حدود الثقة بين نقاط الوصول والأجهزة المتصلة.',
    environment: 'نقطة وصول مملوكة · عميل اختبار · محول متوافق · شبكة RF منفصلة.',
    tools: ['WPA2 / WPA3', 'Kismet', 'Wireshark', 'hostapd', 'Router security settings'],
    objectives: ['مراجعة أنماط المصادقة والتشفير', 'تقييم إعدادات نقطة الوصول وWPS', 'فهم مخاطر الشبكات المفتوحة والضيف', 'مراجعة عزل العملاء وتحديث Firmware', 'إعداد خط أساس أمني لاسلكي'],
    workflow: ['إنشاء شبكة اختبار خاصة', 'توثيق إعدادات نقطة الوصول', 'مراجعة الاتصالات والسياسات', 'تطبيق التقوية والتحقق منها'],
    safety: 'لا يجري التقاط أو اختبار شبكات الجيران أو الشبكات العامة. يقتصر العمل على نقطة وصول مملوكة أو بإذن صريح.',
    outputs: ['قائمة تحقق Wi-Fi', 'مخطط فصل الشبكات', 'مراجعة إعدادات AP', 'توصيات WPA3 وإدارة الوصول'],
    Icon: Wifi
  },
  {
    id: 'memory', name: 'تحليل الذاكرة والأنظمة', en: 'MEMORY & ENDPOINT FORENSICS', category: 'التحقيق والاستجابة',
    status: 'مسار تعلم', summary: 'تحليل آثار الأنظمة والعمليات والذاكرة وسجلات نقاط النهاية أثناء التحقيق.',
    goal: 'ربط آثار العمليات والملفات والاتصالات والأحداث لفهم ما جرى على نقطة النهاية.',
    environment: 'Windows وLinux VMs · صور ذاكرة تدريبية · Sysmon وjournald وسجلات اصطناعية.',
    tools: ['Volatility 3', 'Sysmon', 'Windows Event Viewer', 'Velociraptor', 'osquery'],
    objectives: ['تحليل العمليات والوحدات المحملة', 'مراجعة الاتصالات ومقابض الملفات', 'فهم آثار Persistence على مستوى دفاعي', 'ربط سجلات النظام بخط زمني', 'تمييز حدود الذاكرة الحية والقرص'],
    workflow: ['تحديد مصدر الدليل وتوقيته', 'جمع الصورة والسجلات', 'تحليل الآثار وربطها', 'كتابة استنتاجات مدعومة بالأدلة'],
    safety: 'تُستخدم صور ذاكرة وأجهزة افتراضية تدريبية. يُحافظ على سلامة الأدلة ولا تُجمع بيانات أجهزة الغير.',
    outputs: ['ملخص تحليل RAM', 'قائمة العمليات والاتصالات', 'خط زمني لنقطة النهاية', 'تقرير فني قابل للمراجعة'],
    Icon: HardDrive
  }
];

const filters = ['الكل', 'الدفاع والشبكات', 'التقييم الهجومي', 'التحقيق والاستجابة', 'أمن التطبيقات', 'أمن البيانات والهوية', 'الأجهزة والأنظمة المتخصصة', 'المحاكاة والتدريب'];

export default function LabsExplorer() {
  const [selected, setSelected] = useState('network-defense');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('الكل');
  const [panel, setPanel] = useState<'overview'|'method'|'outputs'>('overview');
  const visible = useMemo(() => labs.filter(l =>
    (category === 'الكل' || l.category === category) &&
    (l.name + ' ' + l.en + ' ' + l.summary + ' ' + l.tools.join(' ') + ' ' + l.objectives.join(' ')).toLowerCase().includes(query.trim().toLowerCase())
  ), [category, query]);
  const current = visible.find(l => l.id === selected) ?? visible[0];
  const CurrentIcon = current?.Icon ?? FlaskConical;
  const categories = ['الكل', ...Array.from(new Set(labs.map(l => l.category)))];
  const index = current ? labs.findIndex(l => l.id === current.id) + 1 : 0;

  return <main className="content-page labx-page">
    <style jsx global>{\`
      .labx-page{padding:24px 0 60px;color:#e7e8e2}
      .labx-page *{box-sizing:border-box}
      .lx-mast{display:flex;justify-content:space-between;gap:12px;align-items:center;padding:8px 0 15px;border-bottom:1px solid var(--line-cool);color:#92a3a5;font:8px ui-monospace,monospace;letter-spacing:.14em}
      .lx-mast b{color:#cbb17d;font-weight:600}.lx-live{display:inline-flex;align-items:center;gap:7px}.lx-live i{width:6px;height:6px;border-radius:50%;background:#76b99b;box-shadow:0 0 10px #76b99b}
      .lx-hero{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(260px,.75fr);gap:25px;align-items:center;padding:34px 0 27px}
      .lx-eyebrow{display:flex;align-items:center;gap:8px;color:#cbb17d;font:8px ui-monospace,monospace;letter-spacing:.14em}.lx-eyebrow svg{width:15px}
      .lx-hero h1{margin:12px 0 9px;font-size:clamp(29px,4.8vw,49px);line-height:1.35;letter-spacing:-.04em}.lx-hero h1 em{font-style:normal;color:#cbb17d}
      .lx-hero p{max-width:720px;margin:0;color:#aab7b5;font-size:12px;line-height:2.1}
      .lx-tags{display:flex;flex-wrap:wrap;gap:7px;margin-top:17px}.lx-tags span{padding:6px 9px;border:1px solid var(--line-cool);border-radius:4px;color:#b7c1bd;font:7px ui-monospace,monospace;letter-spacing:.05em}
      .lx-architecture{position:relative;min-height:185px;padding:15px;border:1px solid rgba(183,155,104,.23);border-radius:9px;background:radial-gradient(ellipse at 50% 50%,rgba(76,139,145,.12),transparent 65%),#0c171e;overflow:hidden}
      .lx-architecture>small{color:#8d9fa0;font:7px ui-monospace,monospace;letter-spacing:.13em}
      .lx-arch-core{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);display:grid;justify-items:center;gap:4px;width:86px;height:86px;place-content:center;border:1px solid rgba(203,177,125,.5);border-radius:50%;background:#14252c;box-shadow:0 0 35px rgba(83,147,151,.13)}
      .lx-arch-core svg{width:22px;height:22px;color:#d2b982}.lx-arch-core b{font:700 13px ui-monospace,monospace;letter-spacing:.1em}.lx-arch-core span{color:#91a3a2;font:6px ui-monospace,monospace}
      .lx-node{position:absolute;display:grid;gap:3px;padding:7px 9px;border:1px solid rgba(116,157,160,.23);border-radius:5px;background:#122129;color:#b8c7c2;font:7px ui-monospace,monospace}
      .lx-node b{color:#d3bc8e;font-size:7px}.lx-node.n1{top:37px;left:17px}.lx-node.n2{top:37px;right:17px}.lx-node.n3{bottom:20px;left:17px}.lx-node.n4{bottom:20px;right:17px}
      .lx-arch-line{position:absolute;left:50%;top:50%;width:70%;height:1px;background:linear-gradient(90deg,transparent,rgba(126,177,178,.5),transparent);transform:translate(-50%,-50%)}
      .lx-metrics{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin:0 0 28px}
      .lx-metric{padding:13px 15px;border:1px solid var(--line-cool);border-radius:7px;background:linear-gradient(135deg,rgba(31,51,58,.62),rgba(11,20,26,.8))}
      .lx-metric b{display:block;color:#d4bc8b;font:700 22px ui-monospace,monospace}.lx-metric span{color:#98a9a6;font-size:8px}
      .lx-workspace{display:grid;grid-template-columns:255px minmax(0,1fr);gap:12px;align-items:stretch}
      .lx-rail,.lx-console{border:1px solid var(--line-cool);border-radius:9px;background:#0d171e;min-width:0}
      .lx-rail-head{padding:14px 13px 11px;border-bottom:1px solid var(--line-cool)}
      .lx-rail-head small,.lx-console-kicker,.lx-section-kicker{color:#bda477;font:7px ui-monospace,monospace;letter-spacing:.13em}
      .lx-rail-head b{display:block;margin-top:5px;font-size:12px}.lx-search{display:flex;align-items:center;gap:7px;margin-top:11px;padding:8px;border:1px solid var(--line-cool);border-radius:5px;background:#091218}.lx-search svg{width:13px;color:#bda477}.lx-search input{width:100%;min-width:0;border:0;outline:0;background:transparent;color:#e5e7df;font-size:9px}.lx-search input::placeholder{color:#74858a}
      .lx-category{display:flex;gap:5px;flex-wrap:wrap;padding:10px 11px;border-bottom:1px solid var(--line-cool)}.lx-category button{padding:4px 7px;border:1px solid transparent;border-radius:4px;background:transparent;color:#899b9d;font-size:7px}.lx-category button.active{border-color:rgba(203,177,125,.35);background:rgba(203,177,125,.08);color:#ddc99f}
      .lx-registry{display:grid;gap:3px;padding:7px;max-height:780px;overflow:auto;scrollbar-width:thin;scrollbar-color:#344b51 transparent}
      .lx-registry button{display:grid;grid-template-columns:28px minmax(0,1fr) auto;align-items:center;gap:8px;width:100%;padding:9px 8px;border:1px solid transparent;border-radius:5px;background:transparent;text-align:right;color:#aab7b3;cursor:pointer}
      .lx-registry button:hover{background:rgba(255,255,255,.025)}.lx-registry button.active{border-color:rgba(203,177,125,.3);background:linear-gradient(90deg,rgba(203,177,125,.09),rgba(79,135,140,.07));color:#f0e9d9}
      .lx-registry button>i{display:grid;place-items:center;width:26px;height:26px;border:1px solid rgba(122,161,164,.18);border-radius:5px;color:#bba477;font:7px ui-monospace,monospace;font-style:normal}
      .lx-registry button>span{display:grid;gap:2px;min-width:0}.lx-registry button b{font-size:8px;font-weight:600;line-height:1.7}.lx-registry button small{color:#72868a;font:6px ui-monospace,monospace;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.lx-registry button>em{color:#7f9b91;font:6px ui-monospace,monospace;font-style:normal}
      .lx-console{padding:17px;background:linear-gradient(145deg,rgba(24,39,46,.82),rgba(9,17,23,.98))}
      .lx-console-top{display:flex;justify-content:space-between;align-items:center;gap:10px;padding-bottom:12px;border-bottom:1px solid var(--line-cool)}
      .lx-console-id{display:flex;align-items:center;gap:8px;color:#93a6a4;font:7px ui-monospace,monospace;letter-spacing:.1em}.lx-console-id i{display:grid;place-items:center;width:28px;height:28px;border:1px solid rgba(203,177,125,.3);border-radius:6px;color:#d1b782;font-style:normal}.lx-console-id svg{width:15px}
      .lx-state{display:inline-flex;align-items:center;gap:6px;padding:5px 8px;border:1px solid rgba(203,177,125,.24);border-radius:4px;color:#d2bf91;font-size:7px}.lx-state i{width:5px;height:5px;border-radius:50%;background:#c4a66f}
      .lx-title{display:flex;justify-content:space-between;align-items:flex-start;gap:15px;padding:18px 0 13px}.lx-title small{color:#bda477;font:7px ui-monospace,monospace;letter-spacing:.1em}.lx-title h2{margin:5px 0 4px;font-size:clamp(17px,2.5vw,25px);line-height:1.6}.lx-title p{max-width:700px;margin:0;color:#9eafaa;font-size:10px;line-height:1.9}.lx-title>svg{width:29px;height:29px;flex:0 0 29px;color:#d0b681}
      .lx-tabs{display:flex;gap:5px;flex-wrap:wrap;margin:5px 0 15px;padding-bottom:10px;border-bottom:1px solid var(--line-cool)}.lx-tabs button{padding:7px 10px;border:1px solid transparent;border-radius:4px;background:transparent;color:#8fa09f;font-size:8px}.lx-tabs button.active{border-color:rgba(203,177,125,.35);background:rgba(203,177,125,.08);color:#e0cca0}
      .lx-overview-grid{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(220px,.9fr);gap:10px}
      .lx-panel{min-width:0;padding:13px;border:1px solid var(--line-cool);border-radius:6px;background:rgba(4,11,16,.34)}
      .lx-panel h3{display:flex;align-items:center;gap:7px;margin:0 0 9px;color:#d9c69e;font-size:10px}.lx-panel h3 svg{width:14px;height:14px;color:#c8ac77}
      .lx-panel p{margin:0;color:#a8b6b0;font-size:9px;line-height:2}
      .lx-objectives{display:grid;gap:7px;margin:0;padding:0;list-style:none}.lx-objectives li{display:grid;grid-template-columns:15px 1fr;gap:6px;color:#aab7b1;font-size:8px;line-height:1.8}.lx-objectives li:before{content:"+";display:grid;place-items:center;width:13px;height:13px;border:1px solid rgba(203,177,125,.25);border-radius:3px;color:#d2b781;font:9px ui-monospace,monospace}
      .lx-tools{display:flex;flex-wrap:wrap;gap:5px;margin-top:9px}.lx-tools span{padding:5px 7px;border:1px solid rgba(115,157,161,.18);border-radius:4px;background:rgba(89,141,145,.045);color:#aebfba;font:7px ui-monospace,monospace}
      .lx-protocol{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:7px}.lx-protocol article{position:relative;min-height:83px;padding:10px;border:1px solid var(--line-cool);border-radius:5px;background:rgba(255,255,255,.015)}.lx-protocol article small{color:#bda477;font:7px ui-monospace,monospace}.lx-protocol article b{display:block;margin:6px 0 3px;color:#d8ded6;font-size:8px;line-height:1.7}.lx-protocol article span{color:#819392;font-size:7px;line-height:1.7}
      .lx-safety{display:grid;grid-template-columns:19px 1fr;gap:8px;margin-top:11px;padding:10px;border:1px solid rgba(183,155,104,.2);border-radius:5px;background:rgba(183,155,104,.045)}.lx-safety svg{width:17px;color:#cfb47e}.lx-safety b{color:#d5c397;font-size:8px}.lx-safety p{margin:3px 0 0;color:#9baaa4;font-size:8px;line-height:1.9}
      .lx-outputs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.lx-outputs article{display:flex;align-items:center;gap:8px;padding:10px;border:1px solid var(--line-cool);border-radius:5px;color:#b5c0b9;font-size:8px}.lx-outputs svg{width:14px;flex:0 0 14px;color:#cbb17d}
      .lx-blueprint{margin-top:13px;padding:13px;border:1px solid rgba(108,157,162,.2);border-radius:6px;background:linear-gradient(110deg,rgba(56,106,112,.08),rgba(4,11,16,.3))}
      .lx-blueprint-head{display:flex;justify-content:space-between;gap:8px;align-items:center;margin-bottom:10px}.lx-blueprint-head b{color:#d5c59e;font-size:9px}.lx-blueprint-head small{color:#81989a;font:6px ui-monospace,monospace;letter-spacing:.08em}
      .lx-blueprint-flow{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:5px}.lx-blueprint-flow span{display:grid;place-items:center;min-height:38px;padding:6px;border:1px solid rgba(111,157,160,.19);border-radius:4px;color:#a9bab4;font-size:7px;text-align:center}.lx-blueprint-flow span:not(:last-child):after{content:"";display:none}
      .lx-empty{padding:25px;text-align:center;color:#9eafaa;font-size:10px}
      .lx-footnote{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-top:15px;padding-top:12px;border-top:1px solid var(--line-cool);color:#81918f;font:7px ui-monospace,monospace;letter-spacing:.04em}
      .lx-footnote b{color:#cbb17d}
      .lx-principles{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin:15px 0 0}.lx-principles article{padding:12px;border:1px solid var(--line-cool);border-radius:6px;background:rgba(255,255,255,.015)}.lx-principles svg{width:17px;color:#cbb17d}.lx-principles b{display:block;margin:6px 0 3px;color:#d7ddd5;font-size:8px}.lx-principles p{margin:0;color:#849795;font-size:7px;line-height:1.8}
      @media(max-width:850px){.lx-workspace{grid-template-columns:210px minmax(0,1fr)}.lx-overview-grid{grid-template-columns:1fr}.lx-architecture{min-height:170px}}
      @media(max-width:650px){.labx-page{padding-top:14px}.lx-mast{font-size:6px}.lx-hero{grid-template-columns:1fr;padding:25px 0 19px}.lx-architecture{min-height:155px}.lx-metrics{grid-template-columns:repeat(2,minmax(0,1fr));gap:6px;margin-bottom:18px}.lx-metric{padding:10px}.lx-metric b{font-size:19px}.lx-workspace{grid-template-columns:1fr}.lx-rail{order:2}.lx-console{order:1;padding:12px}.lx-registry{grid-template-columns:repeat(2,minmax(0,1fr));max-height:370px}.lx-registry button{grid-template-columns:24px minmax(0,1fr);gap:6px;padding:7px 5px}.lx-registry button>i{width:22px;height:22px}.lx-registry button>em{display:none}.lx-registry button b{font-size:7px}.lx-registry button small{font-size:5px}.lx-title h2{font-size:17px}.lx-protocol{grid-template-columns:repeat(2,minmax(0,1fr))}.lx-outputs{grid-template-columns:1fr}.lx-principles{grid-template-columns:1fr}.lx-blueprint-flow{grid-template-columns:repeat(2,minmax(0,1fr))}}
      @media(prefers-reduced-motion:reduce){.lx-registry button,.lx-tabs button{transition:none}}
    \`}</style>

    <div className="lx-mast"><span>ARFAT ALKAMALI <b>/</b> ENGINEERING DIVISION</span><span className="lx-live"><i/> LAB DIRECTORY SYSTEM <b>·</b> CONTROLLED ENVIRONMENTS</span></div>
    <section className="lx-hero">
      <div>
        <span className="lx-eyebrow"><FlaskConical/> RESEARCH · VALIDATION · SECURITY ENGINEERING</span>
        <h1>منظومة المعامل <em>الهندسية</em></h1>
        <p>بيئة عمل تخصصية لاستكشاف الأنظمة، بناء النماذج، اختبار الضوابط الأمنية، وتحليل النتائج. كل معمل موصوف بنطاقه وبيئته ومنهجيته ومخرجاته المتوقعة، مع فصل واضح بين المسارات المخططة والتجارب المنفذة.</p>
        <div className="lx-tags"><span>LAB OPERATIONS</span><span>RESEARCH & DEVELOPMENT</span><span>AUTHORIZED TESTING</span></div>
      </div>
      <div className="lx-architecture" aria-label="تصور معماري لمنظومة المعامل">
        <small>LAB ECOSYSTEM / REFERENCE ARCHITECTURE</small><div className="lx-arch-line"/>
        <div className="lx-arch-core"><ShieldCheck/><b>AEGIS</b><span>LAB CORE</span></div>
        <div className="lx-node n1"><b>01 / BUILD</b><span>Design & Configure</span></div><div className="lx-node n2"><b>02 / TEST</b><span>Assess & Validate</span></div><div className="lx-node n3"><b>03 / OBSERVE</b><span>Monitor & Analyze</span></div><div className="lx-node n4"><b>04 / REPORT</b><span>Evidence & Improve</span></div>
      </div>
    </section>

    <section className="lx-metrics" aria-label="مؤشرات دليل المعامل">
      <div className="lx-metric"><b>{String(labs.length).padStart(2,'0')}</b><span>تخصصًا ومجالًا مختبريًا</span></div>
      <div className="lx-metric"><b>07</b><span>عائلات هندسية رئيسية</span></div>
      <div className="lx-metric"><b>04</b><span>مراحل في دورة العمل</span></div>
      <div className="lx-metric"><b>01</b><span>مبدأ حاكم: الاختبار المصرح</span></div>
    </section>

    <section className="lx-workspace">
      <aside className="lx-rail">
        <div className="lx-rail-head"><small>01 / LAB REGISTRY</small><b>سجل المعامل والتخصصات</b>
          <label className="lx-search"><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="ابحث عن تخصص أو أداة..." aria-label="البحث في المعامل"/></label>
        </div>
        <div className="lx-category">{categories.map(c=><button key={c} type="button" className={category===c?'active':''} onClick={()=>{setCategory(c);setSelected('network-defense')}}>{c}</button>)}</div>
        <nav className="lx-registry" aria-label="اختيار المعمل">
          {visible.map(l=>{const n=labs.findIndex(x=>x.id===l.id)+1;const Icon=l.Icon;return <button key={l.id} type="button" className={current?.id===l.id?'active':''} onClick={()=>{setSelected(l.id);setPanel('overview')}} aria-current={current?.id===l.id?'page':undefined}>
            <i>{String(n).padStart(2,'0')}</i><span><b>{l.name}</b><small>{l.en}</small></span><em>LAB</em>
          </button>})}
          {visible.length===0&&<div className="lx-empty">لا توجد نتائج مطابقة.</div>}
        </nav>
      </aside>

      {current ? <section className="lx-console" aria-live="polite">
        <div className="lx-console-top"><div className="lx-console-id"><i><CurrentIcon/></i><span>LAB PROFILE / {String(index).padStart(2,'0')} · {current.id.toUpperCase()}</span></div><span className="lx-state"><i/>{current.status}</span></div>
        <header className="lx-title"><div><small>{current.en}</small><h2>{current.name}</h2><p>{current.summary}</p></div><CurrentIcon/></header>
        <div className="lx-tabs" role="tablist" aria-label="أقسام ملف المعمل">
          <button type="button" role="tab" aria-selected={panel==='overview'} className={panel==='overview'?'active':''} onClick={()=>setPanel('overview')}>01 / نظرة هندسية</button>
          <button type="button" role="tab" aria-selected={panel==='method'} className={panel==='method'?'active':''} onClick={()=>setPanel('method')}>02 / منهجية التشغيل</button>
          <button type="button" role="tab" aria-selected={panel==='outputs'} className={panel==='outputs'?'active':''} onClick={()=>setPanel('outputs')}>03 / المخرجات والتوثيق</button>
        </div>

        {panel==='overview'&&<div className="lx-overview-grid">
          <article className="lx-panel"><h3><TargetIcon/> الغرض والنطاق الهندسي</h3><p>{current.goal}</p><div className="lx-blueprint"><div className="lx-blueprint-head"><b>ENVIRONMENT BLUEPRINT</b><small>CONCEPTUAL / LAB ISOLATED</small></div><div className="lx-blueprint-flow"><span>مصادر وأصول الاختبار</span><span>بيئة معزولة ومضبوطة</span><span>أدوات القياس والتحليل</span><span>أدلة ونتائج قابلة للمراجعة</span></div></div></article>
          <article className="lx-panel"><h3><Server/> البنية والبيئة التشغيلية</h3><p>{current.environment}</p><div className="lx-tools">{current.tools.map(t=><span key={t}>{t}</span>)}</div></article>
          <article className="lx-panel"><h3><ScanSearch/> مجالات العمل والتحقق</h3><ul className="lx-objectives">{current.objectives.map(x=><li key={x}>{x}</li>)}</ul></article>
          <article className="lx-panel"><h3><ShieldCheck/> ضوابط السلامة والنطاق</h3><p>{current.safety}</p></article>
        </div>}

        {panel==='method'&&<div>
          <article className="lx-panel"><h3><Workflow/> بروتوكول تنفيذ التجربة</h3><div className="lx-protocol">{current.workflow.map((step,i)=><article key={step}><small>PHASE 0{i+1}</small><b>{step}</b><span>{['تهيئة المدخلات وحدود الاختبار','تنفيذ مضبوط داخل النطاق','جمع القياسات ومراجعة النتائج','تحليل النتائج وتوثيق القرار'][i]}</span></article>)}</div></article>
          <div className="lx-principles"><article><ShieldCheck/><b>Scope Control</b><p>نطاق واضح وتصريح قبل بدء أي اختبار.</p></article><article><Activity/><b>Repeatability</b><p>خطوات قابلة للتكرار ونتائج يمكن مراجعتها.</p></article><article><FileSearch/><b>Evidence First</b><p>الاستنتاجات تستند إلى أدلة وقياسات موثقة.</p></article></div>
        </div>}

        {panel==='outputs'&&<div>
          <article className="lx-panel"><h3><FileSearch/> حزمة المخرجات الفنية المتوقعة</h3><p>المخرجات التالية تصف ما ينبغي إنتاجه عند تنفيذ العمل في هذا المجال؛ ولا تُعرض بوصفها نتائج منجزة ما لم تتوفر ملفات وتقارير فعلية.</p><div className="lx-outputs">{current.outputs.map(x=><article key={x}><CheckCircle2/>{x}</article>)}</div></article>
          <div className="lx-safety"><ShieldCheck/><div><b>سياسة نزاهة العرض</b><p>لا تُنسب تجربة أو نتيجة أو جاهزية تشغيلية إلى المعمل دون تنفيذها والتحقق منها. حالة هذا المسار الحالية: {current.status}.</p></div></div>
        </div>}
        <footer className="lx-footnote"><span>CLASSIFICATION: TRAINING / RESEARCH SCOPE</span><span>LAB REF <b>{String(index).padStart(2,'0')}-{current.id.toUpperCase()}</b></span><span>BUILD · TEST · VERIFY · DOCUMENT</span></footer>
      </section> : <section className="lx-console"><div className="lx-empty">اختر معملًا من سجل التخصصات لعرض ملفه الهندسي.</div></section>}
    </section>
  </main>;
}

function TargetIcon() {
  return <ScanSearch aria-hidden="true"/>;
}
